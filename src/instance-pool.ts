// https://www.terraform.io/docs/providers/databricks/r/instance_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstancePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#custom_tags InstancePool#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#enable_elastic_disk InstancePool#enable_elastic_disk}
  */
  readonly enableElasticDisk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#idle_instance_autotermination_minutes InstancePool#idle_instance_autotermination_minutes}
  */
  readonly idleInstanceAutoterminationMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#instance_pool_id InstancePool#instance_pool_id}
  */
  readonly instancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#instance_pool_name InstancePool#instance_pool_name}
  */
  readonly instancePoolName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#max_capacity InstancePool#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#min_idle_instances InstancePool#min_idle_instances}
  */
  readonly minIdleInstances?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#node_type_id InstancePool#node_type_id}
  */
  readonly nodeTypeId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#preloaded_spark_versions InstancePool#preloaded_spark_versions}
  */
  readonly preloadedSparkVersions?: string[];
  /**
  * aws_attributes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#aws_attributes InstancePool#aws_attributes}
  */
  readonly awsAttributes?: InstancePoolAwsAttributes;
  /**
  * azure_attributes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#azure_attributes InstancePool#azure_attributes}
  */
  readonly azureAttributes?: InstancePoolAzureAttributes;
  /**
  * disk_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#disk_spec InstancePool#disk_spec}
  */
  readonly diskSpec?: InstancePoolDiskSpec;
  /**
  * gcp_attributes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#gcp_attributes InstancePool#gcp_attributes}
  */
  readonly gcpAttributes?: InstancePoolGcpAttributes;
  /**
  * preloaded_docker_image block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#preloaded_docker_image InstancePool#preloaded_docker_image}
  */
  readonly preloadedDockerImage?: InstancePoolPreloadedDockerImage[] | cdktf.IResolvable;
}
export interface InstancePoolAwsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#availability InstancePool#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#spot_bid_price_percent InstancePool#spot_bid_price_percent}
  */
  readonly spotBidPricePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#zone_id InstancePool#zone_id}
  */
  readonly zoneId?: string;
}

export function instancePoolAwsAttributesToTerraform(struct?: InstancePoolAwsAttributesOutputReference | InstancePoolAwsAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    spot_bid_price_percent: cdktf.numberToTerraform(struct!.spotBidPricePercent),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}

export class InstancePoolAwsAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstancePoolAwsAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._spotBidPricePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotBidPricePercent = this._spotBidPricePercent;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstancePoolAwsAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._spotBidPricePercent = undefined;
      this._zoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._spotBidPricePercent = value.spotBidPricePercent;
      this._zoneId = value.zoneId;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // spot_bid_price_percent - computed: false, optional: true, required: false
  private _spotBidPricePercent?: number; 
  public get spotBidPricePercent() {
    return this.getNumberAttribute('spot_bid_price_percent');
  }
  public set spotBidPricePercent(value: number) {
    this._spotBidPricePercent = value;
  }
  public resetSpotBidPricePercent() {
    this._spotBidPricePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotBidPricePercentInput() {
    return this._spotBidPricePercent;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}
export interface InstancePoolAzureAttributes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#availability InstancePool#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#spot_bid_max_price InstancePool#spot_bid_max_price}
  */
  readonly spotBidMaxPrice?: number;
}

export function instancePoolAzureAttributesToTerraform(struct?: InstancePoolAzureAttributesOutputReference | InstancePoolAzureAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    spot_bid_max_price: cdktf.numberToTerraform(struct!.spotBidMaxPrice),
  }
}

export class InstancePoolAzureAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstancePoolAzureAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._spotBidMaxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotBidMaxPrice = this._spotBidMaxPrice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstancePoolAzureAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._spotBidMaxPrice = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._spotBidMaxPrice = value.spotBidMaxPrice;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // spot_bid_max_price - computed: false, optional: true, required: false
  private _spotBidMaxPrice?: number; 
  public get spotBidMaxPrice() {
    return this.getNumberAttribute('spot_bid_max_price');
  }
  public set spotBidMaxPrice(value: number) {
    this._spotBidMaxPrice = value;
  }
  public resetSpotBidMaxPrice() {
    this._spotBidMaxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotBidMaxPriceInput() {
    return this._spotBidMaxPrice;
  }
}
export interface InstancePoolDiskSpecDiskType {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#azure_disk_volume_type InstancePool#azure_disk_volume_type}
  */
  readonly azureDiskVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#ebs_volume_type InstancePool#ebs_volume_type}
  */
  readonly ebsVolumeType?: string;
}

export function instancePoolDiskSpecDiskTypeToTerraform(struct?: InstancePoolDiskSpecDiskTypeOutputReference | InstancePoolDiskSpecDiskType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_disk_volume_type: cdktf.stringToTerraform(struct!.azureDiskVolumeType),
    ebs_volume_type: cdktf.stringToTerraform(struct!.ebsVolumeType),
  }
}

export class InstancePoolDiskSpecDiskTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstancePoolDiskSpecDiskType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureDiskVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureDiskVolumeType = this._azureDiskVolumeType;
    }
    if (this._ebsVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeType = this._ebsVolumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstancePoolDiskSpecDiskType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureDiskVolumeType = undefined;
      this._ebsVolumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureDiskVolumeType = value.azureDiskVolumeType;
      this._ebsVolumeType = value.ebsVolumeType;
    }
  }

  // azure_disk_volume_type - computed: false, optional: true, required: false
  private _azureDiskVolumeType?: string; 
  public get azureDiskVolumeType() {
    return this.getStringAttribute('azure_disk_volume_type');
  }
  public set azureDiskVolumeType(value: string) {
    this._azureDiskVolumeType = value;
  }
  public resetAzureDiskVolumeType() {
    this._azureDiskVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDiskVolumeTypeInput() {
    return this._azureDiskVolumeType;
  }

  // ebs_volume_type - computed: false, optional: true, required: false
  private _ebsVolumeType?: string; 
  public get ebsVolumeType() {
    return this.getStringAttribute('ebs_volume_type');
  }
  public set ebsVolumeType(value: string) {
    this._ebsVolumeType = value;
  }
  public resetEbsVolumeType() {
    this._ebsVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeTypeInput() {
    return this._ebsVolumeType;
  }
}
export interface InstancePoolDiskSpec {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#disk_count InstancePool#disk_count}
  */
  readonly diskCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#disk_size InstancePool#disk_size}
  */
  readonly diskSize?: number;
  /**
  * disk_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#disk_type InstancePool#disk_type}
  */
  readonly diskType?: InstancePoolDiskSpecDiskType;
}

export function instancePoolDiskSpecToTerraform(struct?: InstancePoolDiskSpecOutputReference | InstancePoolDiskSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_count: cdktf.numberToTerraform(struct!.diskCount),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: instancePoolDiskSpecDiskTypeToTerraform(struct!.diskType),
  }
}

export class InstancePoolDiskSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstancePoolDiskSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskCount = this._diskCount;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstancePoolDiskSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskCount = undefined;
      this._diskSize = undefined;
      this._diskType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskCount = value.diskCount;
      this._diskSize = value.diskSize;
      this._diskType.internalValue = value.diskType;
    }
  }

  // disk_count - computed: false, optional: true, required: false
  private _diskCount?: number; 
  public get diskCount() {
    return this.getNumberAttribute('disk_count');
  }
  public set diskCount(value: number) {
    this._diskCount = value;
  }
  public resetDiskCount() {
    this._diskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCountInput() {
    return this._diskCount;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType = new InstancePoolDiskSpecDiskTypeOutputReference(this, "disk_type");
  public get diskType() {
    return this._diskType;
  }
  public putDiskType(value: InstancePoolDiskSpecDiskType) {
    this._diskType.internalValue = value;
  }
  public resetDiskType() {
    this._diskType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType.internalValue;
  }
}
export interface InstancePoolGcpAttributes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#availability InstancePool#availability}
  */
  readonly availability?: string;
}

export function instancePoolGcpAttributesToTerraform(struct?: InstancePoolGcpAttributesOutputReference | InstancePoolGcpAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
  }
}

export class InstancePoolGcpAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstancePoolGcpAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstancePoolGcpAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }
}
export interface InstancePoolPreloadedDockerImageBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#password InstancePool#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#username InstancePool#username}
  */
  readonly username: string;
}

export function instancePoolPreloadedDockerImageBasicAuthToTerraform(struct?: InstancePoolPreloadedDockerImageBasicAuthOutputReference | InstancePoolPreloadedDockerImageBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class InstancePoolPreloadedDockerImageBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstancePoolPreloadedDockerImageBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstancePoolPreloadedDockerImageBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface InstancePoolPreloadedDockerImage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#url InstancePool#url}
  */
  readonly url: string;
  /**
  * basic_auth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool#basic_auth InstancePool#basic_auth}
  */
  readonly basicAuth?: InstancePoolPreloadedDockerImageBasicAuth;
}

export function instancePoolPreloadedDockerImageToTerraform(struct?: InstancePoolPreloadedDockerImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
    basic_auth: instancePoolPreloadedDockerImageBasicAuthToTerraform(struct!.basicAuth),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool databricks_instance_pool}
*/
export class InstancePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_instance_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/instance_pool databricks_instance_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstancePoolConfig
  */
  public constructor(scope: Construct, id: string, config: InstancePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_instance_pool',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '0.5.8',
        providerVersionConstraint: '~> 0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customTags = config.customTags;
    this._enableElasticDisk = config.enableElasticDisk;
    this._idleInstanceAutoterminationMinutes = config.idleInstanceAutoterminationMinutes;
    this._instancePoolId = config.instancePoolId;
    this._instancePoolName = config.instancePoolName;
    this._maxCapacity = config.maxCapacity;
    this._minIdleInstances = config.minIdleInstances;
    this._nodeTypeId = config.nodeTypeId;
    this._preloadedSparkVersions = config.preloadedSparkVersions;
    this._awsAttributes.internalValue = config.awsAttributes;
    this._azureAttributes.internalValue = config.azureAttributes;
    this._diskSpec.internalValue = config.diskSpec;
    this._gcpAttributes.internalValue = config.gcpAttributes;
    this._preloadedDockerImage = config.preloadedDockerImage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_tags - computed: false, optional: true, required: false
  private _customTags?: { [key: string]: string }; 
  public get customTags() {
    return this.getStringMapAttribute('custom_tags');
  }
  public set customTags(value: { [key: string]: string }) {
    this._customTags = value;
  }
  public resetCustomTags() {
    this._customTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags;
  }

  // enable_elastic_disk - computed: false, optional: true, required: false
  private _enableElasticDisk?: boolean | cdktf.IResolvable; 
  public get enableElasticDisk() {
    return this.getBooleanAttribute('enable_elastic_disk');
  }
  public set enableElasticDisk(value: boolean | cdktf.IResolvable) {
    this._enableElasticDisk = value;
  }
  public resetEnableElasticDisk() {
    this._enableElasticDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableElasticDiskInput() {
    return this._enableElasticDisk;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_instance_autotermination_minutes - computed: false, optional: false, required: true
  private _idleInstanceAutoterminationMinutes?: number; 
  public get idleInstanceAutoterminationMinutes() {
    return this.getNumberAttribute('idle_instance_autotermination_minutes');
  }
  public set idleInstanceAutoterminationMinutes(value: number) {
    this._idleInstanceAutoterminationMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInstanceAutoterminationMinutesInput() {
    return this._idleInstanceAutoterminationMinutes;
  }

  // instance_pool_id - computed: true, optional: true, required: false
  private _instancePoolId?: string; 
  public get instancePoolId() {
    return this.getStringAttribute('instance_pool_id');
  }
  public set instancePoolId(value: string) {
    this._instancePoolId = value;
  }
  public resetInstancePoolId() {
    this._instancePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolIdInput() {
    return this._instancePoolId;
  }

  // instance_pool_name - computed: false, optional: false, required: true
  private _instancePoolName?: string; 
  public get instancePoolName() {
    return this.getStringAttribute('instance_pool_name');
  }
  public set instancePoolName(value: string) {
    this._instancePoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolNameInput() {
    return this._instancePoolName;
  }

  // max_capacity - computed: false, optional: true, required: false
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_idle_instances - computed: false, optional: true, required: false
  private _minIdleInstances?: number; 
  public get minIdleInstances() {
    return this.getNumberAttribute('min_idle_instances');
  }
  public set minIdleInstances(value: number) {
    this._minIdleInstances = value;
  }
  public resetMinIdleInstances() {
    this._minIdleInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdleInstancesInput() {
    return this._minIdleInstances;
  }

  // node_type_id - computed: false, optional: false, required: true
  private _nodeTypeId?: string; 
  public get nodeTypeId() {
    return this.getStringAttribute('node_type_id');
  }
  public set nodeTypeId(value: string) {
    this._nodeTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeIdInput() {
    return this._nodeTypeId;
  }

  // preloaded_spark_versions - computed: false, optional: true, required: false
  private _preloadedSparkVersions?: string[]; 
  public get preloadedSparkVersions() {
    return this.getListAttribute('preloaded_spark_versions');
  }
  public set preloadedSparkVersions(value: string[]) {
    this._preloadedSparkVersions = value;
  }
  public resetPreloadedSparkVersions() {
    this._preloadedSparkVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadedSparkVersionsInput() {
    return this._preloadedSparkVersions;
  }

  // aws_attributes - computed: false, optional: true, required: false
  private _awsAttributes = new InstancePoolAwsAttributesOutputReference(this, "aws_attributes");
  public get awsAttributes() {
    return this._awsAttributes;
  }
  public putAwsAttributes(value: InstancePoolAwsAttributes) {
    this._awsAttributes.internalValue = value;
  }
  public resetAwsAttributes() {
    this._awsAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAttributesInput() {
    return this._awsAttributes.internalValue;
  }

  // azure_attributes - computed: false, optional: true, required: false
  private _azureAttributes = new InstancePoolAzureAttributesOutputReference(this, "azure_attributes");
  public get azureAttributes() {
    return this._azureAttributes;
  }
  public putAzureAttributes(value: InstancePoolAzureAttributes) {
    this._azureAttributes.internalValue = value;
  }
  public resetAzureAttributes() {
    this._azureAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAttributesInput() {
    return this._azureAttributes.internalValue;
  }

  // disk_spec - computed: false, optional: true, required: false
  private _diskSpec = new InstancePoolDiskSpecOutputReference(this, "disk_spec");
  public get diskSpec() {
    return this._diskSpec;
  }
  public putDiskSpec(value: InstancePoolDiskSpec) {
    this._diskSpec.internalValue = value;
  }
  public resetDiskSpec() {
    this._diskSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSpecInput() {
    return this._diskSpec.internalValue;
  }

  // gcp_attributes - computed: false, optional: true, required: false
  private _gcpAttributes = new InstancePoolGcpAttributesOutputReference(this, "gcp_attributes");
  public get gcpAttributes() {
    return this._gcpAttributes;
  }
  public putGcpAttributes(value: InstancePoolGcpAttributes) {
    this._gcpAttributes.internalValue = value;
  }
  public resetGcpAttributes() {
    this._gcpAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpAttributesInput() {
    return this._gcpAttributes.internalValue;
  }

  // preloaded_docker_image - computed: false, optional: true, required: false
  private _preloadedDockerImage?: InstancePoolPreloadedDockerImage[] | cdktf.IResolvable; 
  public get preloadedDockerImage() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('preloaded_docker_image')));
  }
  public set preloadedDockerImage(value: InstancePoolPreloadedDockerImage[] | cdktf.IResolvable) {
    this._preloadedDockerImage = value;
  }
  public resetPreloadedDockerImage() {
    this._preloadedDockerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadedDockerImageInput() {
    return this._preloadedDockerImage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._customTags),
      enable_elastic_disk: cdktf.booleanToTerraform(this._enableElasticDisk),
      idle_instance_autotermination_minutes: cdktf.numberToTerraform(this._idleInstanceAutoterminationMinutes),
      instance_pool_id: cdktf.stringToTerraform(this._instancePoolId),
      instance_pool_name: cdktf.stringToTerraform(this._instancePoolName),
      max_capacity: cdktf.numberToTerraform(this._maxCapacity),
      min_idle_instances: cdktf.numberToTerraform(this._minIdleInstances),
      node_type_id: cdktf.stringToTerraform(this._nodeTypeId),
      preloaded_spark_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._preloadedSparkVersions),
      aws_attributes: instancePoolAwsAttributesToTerraform(this._awsAttributes.internalValue),
      azure_attributes: instancePoolAzureAttributesToTerraform(this._azureAttributes.internalValue),
      disk_spec: instancePoolDiskSpecToTerraform(this._diskSpec.internalValue),
      gcp_attributes: instancePoolGcpAttributesToTerraform(this._gcpAttributes.internalValue),
      preloaded_docker_image: cdktf.listMapper(instancePoolPreloadedDockerImageToTerraform)(this._preloadedDockerImage),
    };
  }
}
