class EggsController < ApplicationController
  def create
    # @egg = Egg.new egg_params
    # @egg.total += params[:input]
    # if @egg.save
    #   result = {}
    #   result[:total] = @egg.total
    #   render json: result
    # else
    #   result = {}
    #   render json: result
    # end
    @egg = Egg.new egg_params
    result = {}
    result[:total] = @egg.total
    render json: result
  end

  def show
    @show_eggs = Egg.total
    inventory = {}
    inventory[:total] = @show_eggs.total
    render json: inventory
  end

  def update
    puts params
    if current_user.rank == "admin"
      #if user.admin true
      @egg.total += params[:input]
    else
      @egg.total = @egg.total - params[:input]
      user.eggs += params[:input]
    end
    edited = {}
    edited[:total] = @egg.total
    render json: edited
  end

  private

  def egg_params
    params.require(:list).permit(:total)
  end
end
