class CharacteristicsController < ApplicationController

  # GET /characteristics
  def index
    @characteristics = Characteristic.all

    render json: @characteristics
  end

  def add_characteristic
    @bird = Bird.find(params[:bird_id])
    @characteristic = Characteristic.find(params[:id])

    @bird.characteristics.push(@characteristic)

    render json: @bird, include: :characteristics
  end
end