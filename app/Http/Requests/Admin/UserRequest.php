<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $method = $this->method();
        switch ($method) {
            case 'POST': {
                    return [
                        'name' => 'required',
                        'email' => 'required|email|max:255|unique:users',
                        'password' => 'required|min:6',
                        'role' => 'required',
                    ];
                }
            case 'PUT': {
                    return [
                        'name' => 'required',
                        'email' => 'required|email|max:255|unique:users,email,' . $this->id,
                        'role' => 'required',
                    ];
                }
        }
    }
}
