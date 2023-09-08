package day07;

class A {
	void method() {
		System.out.println(this);
	}
}

class B {
	int num;
	
	public B(int num) {
		this.num = num;
	}
	void printNum() {
		System.out.println("num >>" + this.num);
	}
}

public class ClassTest {
	public static void main(String[] args) {
		A a1 = new A();
		A a2 = new A();
		B b1 = new B(10);
		B b2 = new B(20);
		
		a1.method();
		System.out.println(a1);
		b1.printNum();
		b2.printNum();
	}

}
