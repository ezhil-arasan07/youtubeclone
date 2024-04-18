export const API_KEY= 'AIzaSyDzLIpI1F6_Iqp6agKy-D6rvjPIz8OfURQ';

export const value_converter = (value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}