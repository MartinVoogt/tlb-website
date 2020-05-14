<?php 


/** simple stupid class */
class requestor {

    protected $url; 
    
    protected function get_url() { return $this->url;   }

    protected function get_request()
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,$this->get_url());
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        $result = curl_exec($ch);
        curl_close ($ch);

        return $result;
    }

    public function set_url($url) { $this->url = $url; }

    public function get()
    {
        $result = $this->get_request(); 
        if($result){ 
            header('Content-type: application/json');
            echo $result;
        }
    }

}

$request = new requestor();
$request->set_url('http://51.75.145.34:2412');
$request->get();


?>