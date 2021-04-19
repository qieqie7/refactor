function printOwing(invoice) {
    const outStanding = calculateOutstanding();

    recordDueDate();

    printBanner();
    printDetails();

    function printBanner() {
        console.log('***********************************');
        console.log('********** Customer Owes **********');
        console.log('***********************************');
    }

    function printDetails() {
        console.log(`name: ${invoice.customer}`);
        console.log(`amount: ${outStanding}`);
        console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
    }

    function recordDueDate() {
        const today = Clock.today; // new Date();
        invoice.dueDate = new Date(today.geFullYear(), today.getMonth(), today.getDate() + 30);
    }

    function calculateOutstanding() {
        let result = 0;
        for (const o of invoice.orders) {
            result += o.amount;
        }
        return result;
    }
}
