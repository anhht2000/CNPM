package dh_gtvt.cnpm.dto;

public class UserBodyDTO {
	
	private short id;
	
	private String email;
	
	private String phone;
	
	private String firstName;
	
	private String lastName;

	public UserBodyDTO(short id, String email, String phone, String firstName, String lastName) {
		super();
		this.id = id;
		this.email = email;
		this.phone = phone;
		this.firstName = firstName;
		this.lastName = lastName;
	}

	public short getId() {
		return id;
	}

	public void setId(short id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
}