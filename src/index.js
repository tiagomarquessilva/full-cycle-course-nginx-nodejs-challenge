const fs = require('fs');
const express = require('express');
const api = express();
const database = require('./models/database');
const Person = require('./models/person');

database.initDatabase()

const loadHtmlTemplate = () =>
{
    let html = '';
    try
    {
        html = fs.readFileSync('./public/template.html', 'utf8');
    }
    catch (error)
    {
        console.error(error);
    }

    return html;
}

const createPeopleHtmlTable = (people) =>
{
    const tableHeader =
    `<tr>
        ${
            Object
            .keys(people[0].dataValues)
            .map(key => `<th>${key}</th>`)
            .join('\n')
        }
    </tr>`;

    const tableRows = people
    .map(person =>
        `<tr>
            ${
                Object
                .values(person.dataValues)
                .map(value => `<td>${value instanceof Date ? value.toISOString() : value}</td>`)
                .join('\n')
            }
        </tr>`
    )
    .join('\n');

    return `${tableHeader}\n${tableRows}`
}

api.use(express.static('./public'))

api.get('/', async (req, res) =>
{
    await Person.create(
    {
        name: req.query.name || 'default'
    });

    const htmlTemplate = loadHtmlTemplate()
    if (!htmlTemplate)
    {
        return res.status(500).send()
    }

    const allPeople = await Person.findAll(
    {
        order: [['updatedAt', 'DESC']]
    });

    res.send(htmlTemplate.replace('${TABLE_CONTENT}', createPeopleHtmlTable(allPeople)))
})

const port = 3000;
api.listen(port, () =>
{
    console.log(`Listening on port ${port}`)
})
