exports.handler = function(event,context,input){
    context.succeed({"clientCountryCode": event.clientCountryCode})
}