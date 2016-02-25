#pragma strict

        function CartesianToPolar(point:Vector3):Vector2
    {
        var polar:Vector2;

        //calc longitude
        polar.y = Mathf.Atan2(point.x,point.z);

        //this is easier to write and read than sqrt(pow(x,2), pow(y,2))!
        var xzLen = Vector2(point.x,point.z).magnitude; 
        //atan2 does the magic
        polar.x = Mathf.Atan2(-point.y,xzLen);

        //convert to deg
        polar *= Mathf.Rad2Deg;

        return polar;
    }


    function PolarToCartesian(polar:Vector2):Vector3
    {

        //an origin vector, representing lat,lon of 0,0. 

        var origin=Vector3(0,0,1);
        //build a quaternion using euler angles for lat,lon
        var rotation = Quaternion.Euler(polar.x,polar.y,0);
        //transform our reference vector by the rotation. Easy-peasy!
        var point:Vector3=rotation*origin;

        return point;
    }
