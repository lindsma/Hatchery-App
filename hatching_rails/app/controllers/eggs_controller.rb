class EggsController < ApplicationController
  def create
    @egg = Egg.new(total: params[:input].to_i)
    if @egg.save
      result = {}
      result[:total] = @egg.total
      render json: result
    else
      result = {}
      render json: result
    end
  end

  def show
    @egg = Egg.where(id: 1).first
    inventory = {}
    inventory[:total] = @egg.total
    render json: inventory
  end

  def update
    # # if current_user.rank == "admin"
    # #  if user.admin true
       @egg = Egg.where(id: 1).first
    #   @egg.total += params[:input].to_i
    # else
      @egg.total = @egg.total - params[:input].to_i
      #user.eggs += params[:input].to_i
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
