const plays = require('./play.json');
const invoices = require('./invoices.json');
const createStatement = require('./createStatementData');

console.log(statement(invoices[0], plays));
console.log(htmlStatement(invoices[0], plays));

function statement(invoice, plays) {
    return renderPlainText(createStatement(invoice, plays));
}

function htmlStatement(invoice, plays) {
    return renderHTML(createStatement(invoice, plays));
}

function renderPlainText(data) {
    let result = `Statement for ${data.customer}\n`;
    for (let perf of data.performances) {
        result += `    ${perf.play.name}: ${usd(perf.amount)} ${perf.audience} seats\n`;
    }

    result += `Amount owed is ${usd(data.totalAmount)}\n`;
    result += `You earned ${data.volumeCredits} credits\n`;
    return result;
}

function renderHTML(data) {
    let result = `<h1>Statement for ${data.customer}</h1>\n`;
    result += '<table>\n';
    result += '    <tr><th>play</th><th>seats</th><th>cost</th></tr>\n';
    for (let perf of data.performances) {
        result += `    <tr><td>${perf.play.name}</td><td>${perf.audience}</td>`;
        result += `<td>${usd(perf.amount)}</td></tr>\n`;
    }
    result += '</table>\n';
    result += `<p>Amount owed is <em>${usd(data.totalAmount)}</em></p>\n`;
    result += `<p>You earned <em>${data.totalVolumeCredits}</em> credits</p>\n`;
    return result;
}

function usd(aNumber) {
    return `$${(aNumber / 100).toFixed(2)}`;
}
