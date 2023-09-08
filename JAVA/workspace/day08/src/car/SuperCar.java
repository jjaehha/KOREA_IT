package car;

public class SuperCar extends Car {
	boolean booster;

	public SuperCar(String brand, String color, int price, boolean booster) {
		super(brand, color, price);
		this.booster = booster;
	}
	
	void boosterOn() {
		System.out.println("�ν��� on");
	}
	void boosterOff() {
		System.out.println("�ν��� off");
	}
}
