class BirdsController < ApplicationController
  before_action :set_bird, only: :show
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_user_bird, only: [:update, :destroy]
  # GET /birds
  def index
    @birds = Bird.all

    render json: @birds, include: :characteristics
  end

  # GET /birds/1
  def show
    render json: @bird, include: :characteristics
  end

  # POST /birds
  def create
    @bird = Bird.new(bird_params)
    @bird.user = @current_user
    
    
    if @bird.save
      render json: @bird, status: :created
    else
      render json: @bird.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /birds/1
  def update
    if @bird.update(bird_params)
      render json: @bird
    else
      render json: @bird.errors, status: :unprocessable_entity
    end
  end

  # DELETE /birds/1
  def destroy
    @bird.destroy
  end

  def show_by_type
    @bird_by_type = Bird.where(type_of_bird: params[:name])
    render json: @bird_by_type, include: :characteristics
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bird
      @bird = Bird.find(params[:id])
    end

    def set_user_bird
      @bird = @current_user.birds.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def bird_params
      params.require(:bird).permit(:name, :description, :type_of_bird, :image_url, :user_id)
      # params.require(:bird).permit!
    end
end
