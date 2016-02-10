using System.Linq;
using UnityEngine;
[ExecuteInEditMode]
public class FlipNormals : MonoBehaviour
{
	void Start()
	{
        Mesh mesh = GetComponent<MeshFilter>().sharedMesh;
        mesh.triangles = mesh.triangles.Reverse().ToArray();
	}
}