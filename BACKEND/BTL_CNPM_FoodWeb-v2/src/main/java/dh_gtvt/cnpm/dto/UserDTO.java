package dh_gtvt.cnpm.dto;

public class UserDTO {

	private short id;
	
	private String email;
	
	private String phone;
	
	private String fullName;

	public UserDTO(short id, String email, String phone, String fullName) {
		super();
		this.id = id;
		this.email = email;
		this.phone = phone;
		this.fullName = fullName;
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

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	
	
}
