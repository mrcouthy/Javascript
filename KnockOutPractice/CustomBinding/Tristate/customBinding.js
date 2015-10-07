$(document).ready(function () {
    var viewModel = {
        f: ko.observable(0),//negative=>indeterminate
        j: ko.observable(true)
    };

    ko.bindingHandlers.tristate = {
        update: function (element, valueAccessor) {
            var value = ko.unwrap(valueAccessor());
            debugger;
            console.log(value);
            if (value == 0) {
                element.indeterminate = true;
            } else if (value < 0) {
                element.indeterminate = false;
                element.checked = false;
            } else {
                element.indeterminate = false;
                element.checked = true;
            }
        }
    }


    ko.applyBindings(viewModel);
}
);
