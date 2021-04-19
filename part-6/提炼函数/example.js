function printOwing(invoice) {
    let outStanding = 0;

    console.log('***********************************');
    console.log('********** Customer Owes **********');
    console.log('***********************************');

    for (const o of invoice.orders) {
        outStanding += o.amount;
    }

    const today = Clock.today; // new Date();
    invoice.dueDate = new Date(today.geFullYear(), today.getMonth(), today.getDate() + 30);

    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outStanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}
