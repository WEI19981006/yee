$(function () {
    $.ajax({
        url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-44EED58A-91ED-4CE1-9D61-B91E49077EE6&locationName=%E5%8C%97%E6%8A%95%E5%8D%80&elementName=T',
        type: "GET",
        dataType: "json",
        success: function (response) {
            console.log(response);
            $('#city_name').html(response.records.locations[0].locationsName);
            $('#district').html(response.records.locations[0].location[0].locationName);
            $('#tempture').html(response.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value + "&#176;")


            let weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
            let j = 0;
            for (let i = 0; i < 10; i++) {
                console.log($('.block').eq(i).find('small').html());
                console.log($('.block').eq(i).find('h6').html());

                if (i % 2 == 0) {
                    let T = response.records.locations[0].location[0].weatherElement[0].time[i].elementValue[0].value;
                    let wd = response.records.locations[0].location[0].weatherElement[0].time[i].startTime;
                    let tempture = `<strong>${T}&#176;</strong>`;
                    console.log(tempture);
                    $('.block').eq(j).find('h6').html(tempture);

                    const d = new Date(wd);
                    let day_index = d.getDay();
                    console.log(day_index);
                    $('.block').eq(j).find('small').html(weekday[day_index]);
                    j++;
                }
            }

        },
        error: function (error) {
            console.log(error);
        }
    })
})