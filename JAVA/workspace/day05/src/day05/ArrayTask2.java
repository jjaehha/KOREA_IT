package day05;

public class ArrayTask2 {
	public static void main(String[] args) {
		// a ~ f���� ����� �ϴµ� C�� �����ϰ� �����ϰ� ���
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
