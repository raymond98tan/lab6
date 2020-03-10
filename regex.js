function highlight() {
    var regex_function = document.getElementById("regex-function").value; //the function input box
    var regex_input = document.getElementById("regex-input").value; //the text the regex is to be run on
    var reg = new RegExp(regex_function, "g"); //setup the regex with our variable (This is required! Since we use a variable)
    var result = regex_input.replace(reg, "<span class=\"highlight\">$&</span>");
    //the above runs a string replace function on the regex_input.
    //The replace function of strings accepts regex, so we can use the input directly.
    //It replaces it using a span, similar to what the instructions say. the `$&` is a symbol meaning "match"
    //It simply insets the found string. This allows us to do it all in one step.
    document.getElementById("regex-result").innerHTML = result;
}