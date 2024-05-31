// https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/aws_s3_mount
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsS3MountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/aws_s3_mount#cluster_id AwsS3Mount#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/aws_s3_mount#id AwsS3Mount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/aws_s3_mount#instance_profile AwsS3Mount#instance_profile}
  */
  readonly instanceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/aws_s3_mount#mount_name AwsS3Mount#mount_name}
  */
  readonly mountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/aws_s3_mount#s3_bucket_name AwsS3Mount#s3_bucket_name}
  */
  readonly s3BucketName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/aws_s3_mount databricks_aws_s3_mount}
*/
export class AwsS3Mount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_aws_s3_mount";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsS3Mount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsS3Mount to import
  * @param importFromId The id of the existing AwsS3Mount that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/aws_s3_mount#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsS3Mount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_aws_s3_mount", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/resources/aws_s3_mount databricks_aws_s3_mount} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsS3MountConfig
  */
  public constructor(scope: Construct, id: string, config: AwsS3MountConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_aws_s3_mount',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.46.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._instanceProfile = config.instanceProfile;
    this._mountName = config.mountName;
    this._s3BucketName = config.s3BucketName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instance_profile - computed: false, optional: true, required: false
  private _instanceProfile?: string; 
  public get instanceProfile() {
    return this.getStringAttribute('instance_profile');
  }
  public set instanceProfile(value: string) {
    this._instanceProfile = value;
  }
  public resetInstanceProfile() {
    this._instanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileInput() {
    return this._instanceProfile;
  }

  // mount_name - computed: false, optional: false, required: true
  private _mountName?: string; 
  public get mountName() {
    return this.getStringAttribute('mount_name');
  }
  public set mountName(value: string) {
    this._mountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountNameInput() {
    return this._mountName;
  }

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      instance_profile: cdktf.stringToTerraform(this._instanceProfile),
      mount_name: cdktf.stringToTerraform(this._mountName),
      s3_bucket_name: cdktf.stringToTerraform(this._s3BucketName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_profile: {
        value: cdktf.stringToHclTerraform(this._instanceProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount_name: {
        value: cdktf.stringToHclTerraform(this._mountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_bucket_name: {
        value: cdktf.stringToHclTerraform(this._s3BucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
