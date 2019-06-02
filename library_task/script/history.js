var historyContainer = document.querySelector('.aside-history-list')


function makeHistory(action, time) {
	var updatedTime = time;
	var updatedTimeMinutes = time.getMinutes();
	var currentTime = new Date();
	var currentTimeMinutes = currentTime.getMinutes();
	historyContainer.removeChild(historyContainer.lastChild);

	var new_div = document.createElement('div');
	var new_i = document.createElement('i');
	var new_div_small = document.createElement('div');
	var new_span_text = document.createElement('span');
	var new_span_time = document.createElement('span');

	new_div.className = 'aside-history-list-item';
	new_i.className = 'fa fa-clock-o';
	new_div_small.className = 'history-text-container';
	new_span_text.className = 'history-text';
	new_span_time.className = 'history-time';

	historyContainer.appendChild(new_div);
	new_div.appendChild(new_i);
	new_div.appendChild(new_div_small);
	new_div_small.appendChild(new_span_text);
	new_div_small.appendChild(new_span_time);

	

	var historyText = document.querySelector('.history-text');
	var historyTime = document.querySelector('.history-time');

	historyText.innerHTML = action;
	historyTime.innerHTML = currentTimeMinutes - updatedTimeMinutes + " minute(s) ago";
	const updateHistoryTime = function () {
      historyTime.innerHTML = new Date().getMinutes() - updatedTimeMinutes + " minute(s) ago";
    }
    const updateTime = setInterval(() => {
      updateHistoryTime();
    }, 60000);

}
