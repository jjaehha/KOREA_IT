package day06;

public class MethodTask2 {
	public static void main(String[] args) {

		MethodTask2 mt = new MethodTask2();
		System.out.println(mt.addAll(20));
	}
	int addAll(int num) {
		int total = 0;
		for(int i = 0; i<num; i++) {
			total += i+1;
		}
		return total;
	}
}
