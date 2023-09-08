package day06;

public class MethodTest {
	public static void main(String[] args) {
		MethodTest methodtest = new MethodTest();
		System.out.println(methodtest.addTen(3));
	}
	int addTen(int num) {
		int result = num+10;
		return result;
	}
}
