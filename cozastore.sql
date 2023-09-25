use cozastore;


create table product(
	id int,
	primary key(id),
	name varchar(100),
	images varchar (100),
	price varchar (50),
	id_category int,
	description text,
	id_size int,
	id_color int,
	quantity varchar(255));
	
create table category(
	id int,
	primary key(id),
	name varchar(50));
	
create table carousel(
	id int,
	primary key (id),
	image varchar(50),
	title varchar (50),
	content varchar (100),
	id_category int);
	
create table size (
	id int,
	primary key (id),
	name varchar (50));
	
create table color (
	id int,
	primary key(id),
	name varchar(50));
	
create table user(
	id int, 
	primary key (id),
	username varchar (20),
	password varchar (20),
	email varchar (20));
	
create table cart (
	id int,
	primary key (id),
	id_product int,
	quantity varchar (255),
	id_user int);
	
create table product_order(
	id_product int,
	id_order int,
	primary key (id_product,id_order),
	quantity varchar (255),
	price varchar(50));


create table `order` (
    id int,
    primary key (id),
    id_user int,
    id_status int,
    create_date datetime
);

create table status(
	id int, 
	primary key(id),
	name varchar (255));

create table blog(
	id int, 
	primary key(id),
	image varchar(50),
	content text,
	create_date datetime,
	id_user int);

create table comment(
	id int, 
	primary key (id),
	content text,
	email varchar (50),
	name varchar (50),
	create_date datetime,
	id_blog int);
	
create table blog_tag(
	id_blog int,
	id_tag int,
	primary key(id_blog, id_tag),
	create_date datetime);
	
create table tag(
	id int,
	primary key(id),
	name varchar (50),
	create_date datetime);
	

alter table carousel add constraint fk_id_category_carousel foreign key (id_category) references category(id);

alter table product add constraint fk_id_size_product foreign key (id_size) references size (id);
alter table product add constraint fk_id_color_product foreign key (id_color) references color(id);
alter table product add constraint fk_id_category_product foreign key (id_category) references category(id);
alter table cart add constraint fk_id_product_cart foreign key (id_product) references product(id);

alter table product_order add constraint fk_id_product_product_oder foreign key (id_product) references product(id);
alter table product_order add constraint fk_id_order_product_order foreign key (id_order) references `order`(id);
alter table `order` add constraint fk_id_status_order foreign key (id_status) references status(id);
alter table cart add constraint fk_id_product_cart foreign key (id_product) references product(id);
alter table cart add constraint fk_id_user_cart foreign key (id_user) references user(id);

alter table blog add constraint fk_id_user_blog foreign key (id_user) references user(id);
alter table comment add constraint fk_id_blog_comment foreign key (id_blog) references blog (id);
alter table blog_tag add constraint fk_id_blog_blog_tag foreign key (id_blog) references blog (id);
alter table blog_tag add constraint fk_id_tag_blog_tag foreign key (id_tag) references tag (id);




