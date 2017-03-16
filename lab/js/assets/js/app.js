var container= 'some value';
var cash = 1000

function update_wallet(value) {
	value
$('.wallet').html(value);


}

function charge_card(amount, item){

	if (cash >= amount){
		cash=cash - amount;
		update_wallet(cash);
		$('.purchases').append(item + ',');
	} else {
		alert('not enought money');
	}

}

$('.item').click(function(){
	var amount = $(this).data('amount');
	var amount = $(this).data('item');

}); 


update_wallet(cash);