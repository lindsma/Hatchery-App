class EggsController < ApplicationController
  def create
    @egg = Egg.new egg_params
    if @egg.save
      result = {}
      result[:total] = @egg.total
      render json: result
    else
      result = {
        ok: false,
        error: @egg.error.full_messages
      }
      render json: result, status: 422
    end
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
      @egg.total += params[:whateverfrontendpasses]
    else
      @egg.total = @egg.total - params[:whateverfrontendpasses]
      user.eggs += params[:users_eggs]
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
