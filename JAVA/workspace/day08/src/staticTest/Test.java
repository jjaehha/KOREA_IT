 package staticTest;

class A {
	int a = 5;
	static int b = 4;

	public A() {
	
	}
}

public class Test {
	public static void main(String[] args) {
		A a = new A();
		A a2 = new A();
		
		a.b = 100;
		System.out.println();
	}
}
