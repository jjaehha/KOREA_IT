package day06;

public class ArrayTest1 {
	public static void main(String[] args) {
		int[][] arr = new int[2][3];

		for (int i = 0; i < arr.length; i++) {
			System.out.println("���� i�� index: " + i);
			for(int j=0; j<arr[i].length; j++) {
				System.out.println("���� j�� index: " + j);
			}
		}
	}
}
