package day05;

public class ArrayTask2 {
	public static void main(String[] args) {
		// a ~ f까지 출력을 하는데 C를 제외하고 저장하고 출력
		// char[] arData = new char [5];
		char arr[] = new char[5];
		int temp = 0;
		for (int i = 0; i < arr.length; i++) {
			temp = i;
			if(temp>1) {
				temp++;
			}
			arr[i] = (char)(temp+65);
			System.out.println(arr[i]);
			
		}
	}
}
