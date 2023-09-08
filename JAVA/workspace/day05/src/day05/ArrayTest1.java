package day05;

public class ArrayTest1 {
	public static void main(String[] args) {
//		int[] ar = {1, 2, 3, 4, 5};
//		System.out.println(ar);
		
		// 배열 선언후 1 ~ 10까지 값 넣기
		
		int[] arData = new int[10];
		
		for(int i = 0; i<arData.length; i++) {
			arData[i] = i + 1;
		}
		
		for(int i =0; i < arData.length; i ++) {
			
			System.out.println(arData[i]);
		}
	}
}
