<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'brand_id',
        'category_id',
        'description',
        'volume',
        'price',
        'price_sale',
        'sale_detail',
        'vintage',
        'age',
        'country',
        'alcohol',
        'material',
        'url',
        'score',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function orders()
    {
        return $this->belongsToMany(Order::class, 'order_product')
            ->withPivot('product_name', 'qty', 'total', 'detail_pro');
    }

    public function ratings()
    {
        return $this->hasMany(Rating::class);
    }

    public function pictures()
    {
        return $this->hasMany(Picture::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function getUrlAttribute($value)
    {
        return config('common.storage.product') . $value;
    }

    public function getScoreAttribute($value)
    {
        return $value * 20;
    }

    public function getPriceAttribute($value)
    {
        return '$' . $value . '.00';
    }

    public function getPriceSaleAttribute($value)
    {
        if($value !== NULL)
        {
            return '$' . $value . '.00';
        }

        return $value;
    }

    public function getVolumeAttribute($value)
    {
        return $value . ' ml';
    }
}
