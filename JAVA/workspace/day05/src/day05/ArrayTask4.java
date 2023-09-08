package day05;

public class ArrayTask4 {
	public static void main(String[] args) {
//	int [][] arrData = new int[2][3];
		int[][] arrData = { { 1, 2, 4 }, { 4, 5, 6 } };
		
		for (int i = 0; i < arrData.length; i++) {
			for (int j = 0; j < arrData[i].length; j++) {
				System.out.println(arrData[i][j]);
			}
		}
	}
}
