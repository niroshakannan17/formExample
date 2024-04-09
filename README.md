# formExample

input filed ngModel need to use

form properttemplate #template_name = "ngForm"  (submit)="custome_function_name(template_name)"

select [ngValue]

class class_name{
    parameter:dataType

    Constructor(parameter:dataType){
        // create object
        this.object_name = parameter;
    }
}

variable_name:className[]=[
    new class_name(ovject)
]

if you to nestedformgroup
use ngModelGroup="anyname"

when the component need default value use ngOnInit

class classname{
    paramenter1:dataType;
    paramenter2:dataType;
    paramenter3:dataType;
    paramenter4:dataType;
}

variableName:classname

noonit(){
    this.variableName = {
        paramenter1 = "value;
        paramenter2 = "value;
        paramenter3 = "value;
        paramenter3 = "value;
    }
}