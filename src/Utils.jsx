export default {
    formatCurrency : function(num){
        return 'PKR' + Number(num.toFixed(2)).toLocaleString() + ' ';
    }
}