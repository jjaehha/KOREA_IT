package day06;

public class MethodTask {
	public static void main(String[] args) {
		MethodTask mt = new MethodTask();
		mt.printName("±Ë¿Á«œ");
		
		
		System.out.println(mt.addAll());
		
		int ar[] = {1, 3, 5, 6};
		
		System.out.println(mt.addAr(ar));
		
	}
	void printName(String name) {
		for(int i =0; i<5; i++) {
			System.out.println(i + 1 + ". " + name + "æ»≥Á«œººø‰");
		}
	}
	int addAll() {
		int total = 0;
		for(int i = 0; i<100; i++) {
			total += i+1;
		}
		return total;
	}
	
	int addAr(int[] ar) {		
		int res = 0;
		for (int i =0; i < 4; i++) {
			res += ar[i];
		}
		return res;
	}
}
