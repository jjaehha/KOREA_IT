package day05;

public class ArrayTest1 {
	public static void main(String[] args) {
//		int[] ar = {1, 2, 3, 4, 5};
//		System.out.println(ar);
		
		// �迭 ������ 1 ~ 10���� �� �ֱ�
		
		int[] arData = new int[10];
		
		for(int i = 0; i<arData.length; i++) {
			arData[i] = i + 1;
		}
		
		for(int i =0; i < arData.length; i ++) {
			
			System.out.println(arData[i]);
		}
	}
}
