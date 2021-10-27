package dh_gtvt.cnpm.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Formula;

import dh_gtvt.cnpm.converters.GenderConverter;
import dh_gtvt.cnpm.converters.RoleConverter;
import dh_gtvt.cnpm.converters.gender;
import dh_gtvt.cnpm.converters.role;

@Entity
@Table(name = "User", catalog = "Restaurant")
public class User implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Column(name = "UserID")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private short id;
	
	@OneToMany(mappedBy = "user")
    private List<Bill> bills;
	
	@Column(name = "Email", length = 50, nullable = false, unique = true)
	private String email;
	
	@Column(name = "PhoneNumber", length = 12, nullable = false, unique = true)
	private String phone;
	
	@Column(name = "FirstName", length = 35, nullable = false)
	private String firstName;
	
	@Column(name = "LastName", length = 15, nullable = false)
	private String lastName;
	
	@Formula(" concat(firstName, ' ', lastname)")
	private String fullName;
	
	@Column(name = "PassWord", length = 200, nullable = false)
	private String passWord;
	
	@Column(name = "DateOfBirth")
    @Temporal(TemporalType.TIMESTAMP)
	private Date dateOfBirth;
	
	@Column(name = "Gender", columnDefinition = "varchar(7) default 'Unknown'")
    @Convert(converter = GenderConverter.class)
	private gender gender;
	
	@Column(name = "Address", length = 100, nullable = false)
	private String address;
	
	@Column(name = "Role", columnDefinition = "varchar(5) default 'User'")
    @Convert(converter = RoleConverter.class)
	private role role;
	
	@Column(name = "CreatedAt")
    @Temporal(TemporalType.TIMESTAMP)
	@CreationTimestamp
	private Date createdDate;
	
	@Column(name = "UpdatedAt")
    @Temporal(TemporalType.TIMESTAMP)
	@CreationTimestamp
	private Date updatedDate;

	public User() {
		super();
	}

	public short getId() {
		return id;
	}

	public void setId(short id) {
		this.id = id;
	}

	public List<Bill> getBills() {
		return bills;
	}

	public void setBills(List<Bill> bills) {
		this.bills = bills;
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

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getPassWord() {
		return passWord;
	}

	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public gender getGender() {
		return gender;
	}

	public void setGender(gender gender) {
		this.gender = gender;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public role getRole() {
		return role;
	}

	public void setRole(role role) {
		this.role = role;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}
	
	
}
