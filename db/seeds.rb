# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bird.destroy_all
Characteristic.destroy_all
User.destroy_all

@user = User.create!(username: 'paul', email: 'paul@fun.com', password: '123456')

puts "#{User.count}, users created!"

@easy = Characteristic.create!(name: "Low Maintenace")
@medium = Characteristic.create!(name: "Medium Maintenance")
@hard = Characteristic.create!(name: "High Maintenace")
@quiet = Characteristic.create!(name: "Quiet")
@loud = Characteristic.create!(name: "Noisy")
@small = Characteristic.create!(name: "Small")
@medium = Characteristic.create!(name: "Medium")
@large = Characteristic.create!(name: "Large")
@Clow = Characteristic.create!(name: "Low Caution")
@Chigh = Characteristic.create!(name: "High Caution")

puts "#{Characteristic.count}, characteristics created!"

Bird.create!(name: "Rudy", description: "Friendly and loves almonds", type_of_bird: "Macaw", image_url: "test.jpg", characteristics: [@hard, @loud, @large, @Chigh], user: @user)

puts "#{Bird.count}, birds created"










