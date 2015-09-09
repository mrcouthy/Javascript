$(function () {
    // Here's my data model
    var ViewModel = function () {
        ko.bindingHandlers.tabs = {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                $(element).tabs();
                ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                    $(element).tabs("destroy");
                });
            }
        };
    };
    ko.applyBindings(new ViewModel()); // This makes Knockout get to work
});



