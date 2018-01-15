$.typeahead({
    input: '.js-typeahead-car_v1',
    minLength: 0,
    order: "asc",
    offset: true,
    hint: true,
    display: ["name"], //choose the key to display to user
    source: {
        car: {
            data: [ //example data
                    {
                        "id": 1,
                        "name": "cpsc 999", //display this
                        "location": "dmp 110",
                        "created_at": "2018-01-14T17:48:53.862Z",
                        "updated_at": "2018-01-14T17:48:53.862Z",
                        "url": "http://localhost:3000/courses/1.json"
                    }
                ],
            ajax: {
                url: "http://localhost:3000/courses.json"
            }
        }
    },
    callback: {
        onClick: function (node, a, item, event) {

            console.log(node)
            console.log(a)
            console.log(item)
            console.log(event)

            console.log('onClick function triggered');

        },
        onSubmit: function (node, form, item, event) {

            console.log(node)
            console.log(form)
            console.log(item)
            console.log(event)

            console.log('onSubmit override function triggered');

        }
        //  onResult: function (node, query, result, resultCount, resultCountPerGroup) {
        //     console.log("node:"); console.log(node);
        //     console.log("query:"); console.log(query);
        //     console.log("result:"); console.log(result);
        //     console.log("resultCount:"); console.log(resultCount);
        //     console.log("resultCountPerGroup:"); console.log(resultCountPerGroup);
        // }
    }
});