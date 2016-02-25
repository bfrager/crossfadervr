// latlong (mgear / http://unity3dstuff.blogspot.com/ )
var myobject:Transform; // marker object
var myradius:float = 5; // globe ball radius
var mylatitude:float = 0; // lat
var mylongitude:float = 0; // long

function Start () 
{

	// calculation code taken from 
	// @miquael http://www.actionscript.org/forums/showthread.php3?p=722957#post722957
	// convert lat/long to radians
	mylatitude = Mathf.PI  * mylatitude / 180;
	mylongitude = Mathf.PI  * mylongitude / 180;

	// adjust position by radians	
	mylatitude -= 1.570795765134; // subtract 90 degrees (in radians)

	// and switch z and y (since z is forward)
	var xPos = (myradius) * Mathf.Sin(mylatitude) * Mathf.Cos(mylongitude);
	var zPos = (myradius) * Mathf.Sin(mylatitude) * Mathf.Sin(mylongitude);
	var yPos = (myradius) * Mathf.Cos(mylatitude); 


	// move marker to position
	myobject.position = Vector3(xPos,yPos,zPos);

}