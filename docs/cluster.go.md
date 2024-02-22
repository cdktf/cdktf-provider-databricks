# `cluster` Submodule <a name="`cluster` Submodule" id="@cdktf/provider-databricks.cluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cluster <a name="Cluster" id="@cdktf/provider-databricks.cluster.Cluster"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster databricks_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.Cluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewCluster(scope Construct, id *string, config ClusterConfig) Cluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig">ClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterConfig">ClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putAutoscale">PutAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putAwsAttributes">PutAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putAzureAttributes">PutAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putClusterLogConf">PutClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putClusterMountInfo">PutClusterMountInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putDockerImage">PutDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putGcpAttributes">PutGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putInitScripts">PutInitScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putLibrary">PutLibrary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putWorkloadType">PutWorkloadType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetApplyPolicyDefaultValues">ResetApplyPolicyDefaultValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetAutoscale">ResetAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetAutoterminationMinutes">ResetAutoterminationMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetAwsAttributes">ResetAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetAzureAttributes">ResetAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetClusterLogConf">ResetClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetClusterMountInfo">ResetClusterMountInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetCustomTags">ResetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetDataSecurityMode">ResetDataSecurityMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetDockerImage">ResetDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetDriverInstancePoolId">ResetDriverInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetDriverNodeTypeId">ResetDriverNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetEnableElasticDisk">ResetEnableElasticDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetEnableLocalDiskEncryption">ResetEnableLocalDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetGcpAttributes">ResetGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetIdempotencyToken">ResetIdempotencyToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetInitScripts">ResetInitScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetInstancePoolId">ResetInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetIsPinned">ResetIsPinned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetLibrary">ResetLibrary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetNodeTypeId">ResetNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetNumWorkers">ResetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetRuntimeEngine">ResetRuntimeEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetSingleUserName">ResetSingleUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetSparkConf">ResetSparkConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetSparkEnvVars">ResetSparkEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetSshPublicKeys">ResetSshPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetWorkloadType">ResetWorkloadType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.Cluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.cluster.Cluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.cluster.Cluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.cluster.Cluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.cluster.Cluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.cluster.Cluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.cluster.Cluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.cluster.Cluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.cluster.Cluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.cluster.Cluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.cluster.Cluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.cluster.Cluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.cluster.Cluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cluster.Cluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cluster.Cluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.Cluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.cluster.Cluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cluster.Cluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.cluster.Cluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.cluster.Cluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.cluster.Cluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.cluster.Cluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cluster.Cluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoscale` <a name="PutAutoscale" id="@cdktf/provider-databricks.cluster.Cluster.putAutoscale"></a>

```go
func PutAutoscale(value ClusterAutoscale)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putAutoscale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a>

---

##### `PutAwsAttributes` <a name="PutAwsAttributes" id="@cdktf/provider-databricks.cluster.Cluster.putAwsAttributes"></a>

```go
func PutAwsAttributes(value ClusterAwsAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putAwsAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a>

---

##### `PutAzureAttributes` <a name="PutAzureAttributes" id="@cdktf/provider-databricks.cluster.Cluster.putAzureAttributes"></a>

```go
func PutAzureAttributes(value ClusterAzureAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putAzureAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a>

---

##### `PutClusterLogConf` <a name="PutClusterLogConf" id="@cdktf/provider-databricks.cluster.Cluster.putClusterLogConf"></a>

```go
func PutClusterLogConf(value ClusterClusterLogConf)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putClusterLogConf.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a>

---

##### `PutClusterMountInfo` <a name="PutClusterMountInfo" id="@cdktf/provider-databricks.cluster.Cluster.putClusterMountInfo"></a>

```go
func PutClusterMountInfo(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putClusterMountInfo.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDockerImage` <a name="PutDockerImage" id="@cdktf/provider-databricks.cluster.Cluster.putDockerImage"></a>

```go
func PutDockerImage(value ClusterDockerImage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putDockerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a>

---

##### `PutGcpAttributes` <a name="PutGcpAttributes" id="@cdktf/provider-databricks.cluster.Cluster.putGcpAttributes"></a>

```go
func PutGcpAttributes(value ClusterGcpAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putGcpAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a>

---

##### `PutInitScripts` <a name="PutInitScripts" id="@cdktf/provider-databricks.cluster.Cluster.putInitScripts"></a>

```go
func PutInitScripts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putInitScripts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLibrary` <a name="PutLibrary" id="@cdktf/provider-databricks.cluster.Cluster.putLibrary"></a>

```go
func PutLibrary(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putLibrary.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-databricks.cluster.Cluster.putTimeouts"></a>

```go
func PutTimeouts(value ClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a>

---

##### `PutWorkloadType` <a name="PutWorkloadType" id="@cdktf/provider-databricks.cluster.Cluster.putWorkloadType"></a>

```go
func PutWorkloadType(value ClusterWorkloadType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putWorkloadType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a>

---

##### `ResetApplyPolicyDefaultValues` <a name="ResetApplyPolicyDefaultValues" id="@cdktf/provider-databricks.cluster.Cluster.resetApplyPolicyDefaultValues"></a>

```go
func ResetApplyPolicyDefaultValues()
```

##### `ResetAutoscale` <a name="ResetAutoscale" id="@cdktf/provider-databricks.cluster.Cluster.resetAutoscale"></a>

```go
func ResetAutoscale()
```

##### `ResetAutoterminationMinutes` <a name="ResetAutoterminationMinutes" id="@cdktf/provider-databricks.cluster.Cluster.resetAutoterminationMinutes"></a>

```go
func ResetAutoterminationMinutes()
```

##### `ResetAwsAttributes` <a name="ResetAwsAttributes" id="@cdktf/provider-databricks.cluster.Cluster.resetAwsAttributes"></a>

```go
func ResetAwsAttributes()
```

##### `ResetAzureAttributes` <a name="ResetAzureAttributes" id="@cdktf/provider-databricks.cluster.Cluster.resetAzureAttributes"></a>

```go
func ResetAzureAttributes()
```

##### `ResetClusterId` <a name="ResetClusterId" id="@cdktf/provider-databricks.cluster.Cluster.resetClusterId"></a>

```go
func ResetClusterId()
```

##### `ResetClusterLogConf` <a name="ResetClusterLogConf" id="@cdktf/provider-databricks.cluster.Cluster.resetClusterLogConf"></a>

```go
func ResetClusterLogConf()
```

##### `ResetClusterMountInfo` <a name="ResetClusterMountInfo" id="@cdktf/provider-databricks.cluster.Cluster.resetClusterMountInfo"></a>

```go
func ResetClusterMountInfo()
```

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktf/provider-databricks.cluster.Cluster.resetClusterName"></a>

```go
func ResetClusterName()
```

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktf/provider-databricks.cluster.Cluster.resetCustomTags"></a>

```go
func ResetCustomTags()
```

##### `ResetDataSecurityMode` <a name="ResetDataSecurityMode" id="@cdktf/provider-databricks.cluster.Cluster.resetDataSecurityMode"></a>

```go
func ResetDataSecurityMode()
```

##### `ResetDockerImage` <a name="ResetDockerImage" id="@cdktf/provider-databricks.cluster.Cluster.resetDockerImage"></a>

```go
func ResetDockerImage()
```

##### `ResetDriverInstancePoolId` <a name="ResetDriverInstancePoolId" id="@cdktf/provider-databricks.cluster.Cluster.resetDriverInstancePoolId"></a>

```go
func ResetDriverInstancePoolId()
```

##### `ResetDriverNodeTypeId` <a name="ResetDriverNodeTypeId" id="@cdktf/provider-databricks.cluster.Cluster.resetDriverNodeTypeId"></a>

```go
func ResetDriverNodeTypeId()
```

##### `ResetEnableElasticDisk` <a name="ResetEnableElasticDisk" id="@cdktf/provider-databricks.cluster.Cluster.resetEnableElasticDisk"></a>

```go
func ResetEnableElasticDisk()
```

##### `ResetEnableLocalDiskEncryption` <a name="ResetEnableLocalDiskEncryption" id="@cdktf/provider-databricks.cluster.Cluster.resetEnableLocalDiskEncryption"></a>

```go
func ResetEnableLocalDiskEncryption()
```

##### `ResetGcpAttributes` <a name="ResetGcpAttributes" id="@cdktf/provider-databricks.cluster.Cluster.resetGcpAttributes"></a>

```go
func ResetGcpAttributes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.cluster.Cluster.resetId"></a>

```go
func ResetId()
```

##### `ResetIdempotencyToken` <a name="ResetIdempotencyToken" id="@cdktf/provider-databricks.cluster.Cluster.resetIdempotencyToken"></a>

```go
func ResetIdempotencyToken()
```

##### `ResetInitScripts` <a name="ResetInitScripts" id="@cdktf/provider-databricks.cluster.Cluster.resetInitScripts"></a>

```go
func ResetInitScripts()
```

##### `ResetInstancePoolId` <a name="ResetInstancePoolId" id="@cdktf/provider-databricks.cluster.Cluster.resetInstancePoolId"></a>

```go
func ResetInstancePoolId()
```

##### `ResetIsPinned` <a name="ResetIsPinned" id="@cdktf/provider-databricks.cluster.Cluster.resetIsPinned"></a>

```go
func ResetIsPinned()
```

##### `ResetLibrary` <a name="ResetLibrary" id="@cdktf/provider-databricks.cluster.Cluster.resetLibrary"></a>

```go
func ResetLibrary()
```

##### `ResetNodeTypeId` <a name="ResetNodeTypeId" id="@cdktf/provider-databricks.cluster.Cluster.resetNodeTypeId"></a>

```go
func ResetNodeTypeId()
```

##### `ResetNumWorkers` <a name="ResetNumWorkers" id="@cdktf/provider-databricks.cluster.Cluster.resetNumWorkers"></a>

```go
func ResetNumWorkers()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-databricks.cluster.Cluster.resetPolicyId"></a>

```go
func ResetPolicyId()
```

##### `ResetRuntimeEngine` <a name="ResetRuntimeEngine" id="@cdktf/provider-databricks.cluster.Cluster.resetRuntimeEngine"></a>

```go
func ResetRuntimeEngine()
```

##### `ResetSingleUserName` <a name="ResetSingleUserName" id="@cdktf/provider-databricks.cluster.Cluster.resetSingleUserName"></a>

```go
func ResetSingleUserName()
```

##### `ResetSparkConf` <a name="ResetSparkConf" id="@cdktf/provider-databricks.cluster.Cluster.resetSparkConf"></a>

```go
func ResetSparkConf()
```

##### `ResetSparkEnvVars` <a name="ResetSparkEnvVars" id="@cdktf/provider-databricks.cluster.Cluster.resetSparkEnvVars"></a>

```go
func ResetSparkEnvVars()
```

##### `ResetSshPublicKeys` <a name="ResetSshPublicKeys" id="@cdktf/provider-databricks.cluster.Cluster.resetSshPublicKeys"></a>

```go
func ResetSshPublicKeys()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-databricks.cluster.Cluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWorkloadType` <a name="ResetWorkloadType" id="@cdktf/provider-databricks.cluster.Cluster.resetWorkloadType"></a>

```go
func ResetWorkloadType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.cluster.Cluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.Cluster_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.cluster.Cluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.cluster.Cluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.Cluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.cluster.Cluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.cluster.Cluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.Cluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.cluster.Cluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.Cluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Cluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Cluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Cluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference">ClusterAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.awsAttributes">AwsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference">ClusterAwsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.azureAttributes">AzureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference">ClusterAzureAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterLogConf">ClusterLogConf</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference">ClusterClusterLogConfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterMountInfo">ClusterMountInfo</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList">ClusterClusterMountInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterSource">ClusterSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.defaultTags">DefaultTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dockerImage">DockerImage</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference">ClusterDockerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.gcpAttributes">GcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference">ClusterGcpAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.initScripts">InitScripts</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList">ClusterInitScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.library">Library</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList">ClusterLibraryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.workloadType">WorkloadType</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference">ClusterWorkloadTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.applyPolicyDefaultValuesInput">ApplyPolicyDefaultValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.autoscaleInput">AutoscaleInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.autoterminationMinutesInput">AutoterminationMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.awsAttributesInput">AwsAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.azureAttributesInput">AzureAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterLogConfInput">ClusterLogConfInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterMountInfoInput">ClusterMountInfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.customTagsInput">CustomTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dataSecurityModeInput">DataSecurityModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dockerImageInput">DockerImageInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.driverInstancePoolIdInput">DriverInstancePoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.driverNodeTypeIdInput">DriverNodeTypeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.enableElasticDiskInput">EnableElasticDiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.enableLocalDiskEncryptionInput">EnableLocalDiskEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.gcpAttributesInput">GcpAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.idempotencyTokenInput">IdempotencyTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.initScriptsInput">InitScriptsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.instancePoolIdInput">InstancePoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.isPinnedInput">IsPinnedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.libraryInput">LibraryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.nodeTypeIdInput">NodeTypeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.numWorkersInput">NumWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.runtimeEngineInput">RuntimeEngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.singleUserNameInput">SingleUserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkConfInput">SparkConfInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkEnvVarsInput">SparkEnvVarsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkVersionInput">SparkVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sshPublicKeysInput">SshPublicKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.workloadTypeInput">WorkloadTypeInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.applyPolicyDefaultValues">ApplyPolicyDefaultValues</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.autoterminationMinutes">AutoterminationMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.customTags">CustomTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dataSecurityMode">DataSecurityMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.driverInstancePoolId">DriverInstancePoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.driverNodeTypeId">DriverNodeTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.enableElasticDisk">EnableElasticDisk</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.enableLocalDiskEncryption">EnableLocalDiskEncryption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.idempotencyToken">IdempotencyToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.instancePoolId">InstancePoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.isPinned">IsPinned</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.nodeTypeId">NodeTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.numWorkers">NumWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.runtimeEngine">RuntimeEngine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.singleUserName">SingleUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkConf">SparkConf</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkEnvVars">SparkEnvVars</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkVersion">SparkVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.cluster.Cluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.cluster.Cluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.Cluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.cluster.Cluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.cluster.Cluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.cluster.Cluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.cluster.Cluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.cluster.Cluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.cluster.Cluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.cluster.Cluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.cluster.Cluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.cluster.Cluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.cluster.Cluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.cluster.Cluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Autoscale`<sup>Required</sup> <a name="Autoscale" id="@cdktf/provider-databricks.cluster.Cluster.property.autoscale"></a>

```go
func Autoscale() ClusterAutoscaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference">ClusterAutoscaleOutputReference</a>

---

##### `AwsAttributes`<sup>Required</sup> <a name="AwsAttributes" id="@cdktf/provider-databricks.cluster.Cluster.property.awsAttributes"></a>

```go
func AwsAttributes() ClusterAwsAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference">ClusterAwsAttributesOutputReference</a>

---

##### `AzureAttributes`<sup>Required</sup> <a name="AzureAttributes" id="@cdktf/provider-databricks.cluster.Cluster.property.azureAttributes"></a>

```go
func AzureAttributes() ClusterAzureAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference">ClusterAzureAttributesOutputReference</a>

---

##### `ClusterLogConf`<sup>Required</sup> <a name="ClusterLogConf" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterLogConf"></a>

```go
func ClusterLogConf() ClusterClusterLogConfOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference">ClusterClusterLogConfOutputReference</a>

---

##### `ClusterMountInfo`<sup>Required</sup> <a name="ClusterMountInfo" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterMountInfo"></a>

```go
func ClusterMountInfo() ClusterClusterMountInfoList
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList">ClusterClusterMountInfoList</a>

---

##### `ClusterSource`<sup>Required</sup> <a name="ClusterSource" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterSource"></a>

```go
func ClusterSource() *string
```

- *Type:* *string

---

##### `DefaultTags`<sup>Required</sup> <a name="DefaultTags" id="@cdktf/provider-databricks.cluster.Cluster.property.defaultTags"></a>

```go
func DefaultTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DockerImage`<sup>Required</sup> <a name="DockerImage" id="@cdktf/provider-databricks.cluster.Cluster.property.dockerImage"></a>

```go
func DockerImage() ClusterDockerImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference">ClusterDockerImageOutputReference</a>

---

##### `GcpAttributes`<sup>Required</sup> <a name="GcpAttributes" id="@cdktf/provider-databricks.cluster.Cluster.property.gcpAttributes"></a>

```go
func GcpAttributes() ClusterGcpAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference">ClusterGcpAttributesOutputReference</a>

---

##### `InitScripts`<sup>Required</sup> <a name="InitScripts" id="@cdktf/provider-databricks.cluster.Cluster.property.initScripts"></a>

```go
func InitScripts() ClusterInitScriptsList
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList">ClusterInitScriptsList</a>

---

##### `Library`<sup>Required</sup> <a name="Library" id="@cdktf/provider-databricks.cluster.Cluster.property.library"></a>

```go
func Library() ClusterLibraryList
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList">ClusterLibraryList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.cluster.Cluster.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-databricks.cluster.Cluster.property.timeouts"></a>

```go
func Timeouts() ClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.cluster.Cluster.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="@cdktf/provider-databricks.cluster.Cluster.property.workloadType"></a>

```go
func WorkloadType() ClusterWorkloadTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference">ClusterWorkloadTypeOutputReference</a>

---

##### `ApplyPolicyDefaultValuesInput`<sup>Optional</sup> <a name="ApplyPolicyDefaultValuesInput" id="@cdktf/provider-databricks.cluster.Cluster.property.applyPolicyDefaultValuesInput"></a>

```go
func ApplyPolicyDefaultValuesInput() interface{}
```

- *Type:* interface{}

---

##### `AutoscaleInput`<sup>Optional</sup> <a name="AutoscaleInput" id="@cdktf/provider-databricks.cluster.Cluster.property.autoscaleInput"></a>

```go
func AutoscaleInput() ClusterAutoscale
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a>

---

##### `AutoterminationMinutesInput`<sup>Optional</sup> <a name="AutoterminationMinutesInput" id="@cdktf/provider-databricks.cluster.Cluster.property.autoterminationMinutesInput"></a>

```go
func AutoterminationMinutesInput() *f64
```

- *Type:* *f64

---

##### `AwsAttributesInput`<sup>Optional</sup> <a name="AwsAttributesInput" id="@cdktf/provider-databricks.cluster.Cluster.property.awsAttributesInput"></a>

```go
func AwsAttributesInput() ClusterAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a>

---

##### `AzureAttributesInput`<sup>Optional</sup> <a name="AzureAttributesInput" id="@cdktf/provider-databricks.cluster.Cluster.property.azureAttributesInput"></a>

```go
func AzureAttributesInput() ClusterAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `ClusterLogConfInput`<sup>Optional</sup> <a name="ClusterLogConfInput" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterLogConfInput"></a>

```go
func ClusterLogConfInput() ClusterClusterLogConf
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a>

---

##### `ClusterMountInfoInput`<sup>Optional</sup> <a name="ClusterMountInfoInput" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterMountInfoInput"></a>

```go
func ClusterMountInfoInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktf/provider-databricks.cluster.Cluster.property.customTagsInput"></a>

```go
func CustomTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DataSecurityModeInput`<sup>Optional</sup> <a name="DataSecurityModeInput" id="@cdktf/provider-databricks.cluster.Cluster.property.dataSecurityModeInput"></a>

```go
func DataSecurityModeInput() *string
```

- *Type:* *string

---

##### `DockerImageInput`<sup>Optional</sup> <a name="DockerImageInput" id="@cdktf/provider-databricks.cluster.Cluster.property.dockerImageInput"></a>

```go
func DockerImageInput() ClusterDockerImage
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a>

---

##### `DriverInstancePoolIdInput`<sup>Optional</sup> <a name="DriverInstancePoolIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.driverInstancePoolIdInput"></a>

```go
func DriverInstancePoolIdInput() *string
```

- *Type:* *string

---

##### `DriverNodeTypeIdInput`<sup>Optional</sup> <a name="DriverNodeTypeIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.driverNodeTypeIdInput"></a>

```go
func DriverNodeTypeIdInput() *string
```

- *Type:* *string

---

##### `EnableElasticDiskInput`<sup>Optional</sup> <a name="EnableElasticDiskInput" id="@cdktf/provider-databricks.cluster.Cluster.property.enableElasticDiskInput"></a>

```go
func EnableElasticDiskInput() interface{}
```

- *Type:* interface{}

---

##### `EnableLocalDiskEncryptionInput`<sup>Optional</sup> <a name="EnableLocalDiskEncryptionInput" id="@cdktf/provider-databricks.cluster.Cluster.property.enableLocalDiskEncryptionInput"></a>

```go
func EnableLocalDiskEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `GcpAttributesInput`<sup>Optional</sup> <a name="GcpAttributesInput" id="@cdktf/provider-databricks.cluster.Cluster.property.gcpAttributesInput"></a>

```go
func GcpAttributesInput() ClusterGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a>

---

##### `IdempotencyTokenInput`<sup>Optional</sup> <a name="IdempotencyTokenInput" id="@cdktf/provider-databricks.cluster.Cluster.property.idempotencyTokenInput"></a>

```go
func IdempotencyTokenInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InitScriptsInput`<sup>Optional</sup> <a name="InitScriptsInput" id="@cdktf/provider-databricks.cluster.Cluster.property.initScriptsInput"></a>

```go
func InitScriptsInput() interface{}
```

- *Type:* interface{}

---

##### `InstancePoolIdInput`<sup>Optional</sup> <a name="InstancePoolIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.instancePoolIdInput"></a>

```go
func InstancePoolIdInput() *string
```

- *Type:* *string

---

##### `IsPinnedInput`<sup>Optional</sup> <a name="IsPinnedInput" id="@cdktf/provider-databricks.cluster.Cluster.property.isPinnedInput"></a>

```go
func IsPinnedInput() interface{}
```

- *Type:* interface{}

---

##### `LibraryInput`<sup>Optional</sup> <a name="LibraryInput" id="@cdktf/provider-databricks.cluster.Cluster.property.libraryInput"></a>

```go
func LibraryInput() interface{}
```

- *Type:* interface{}

---

##### `NodeTypeIdInput`<sup>Optional</sup> <a name="NodeTypeIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.nodeTypeIdInput"></a>

```go
func NodeTypeIdInput() *string
```

- *Type:* *string

---

##### `NumWorkersInput`<sup>Optional</sup> <a name="NumWorkersInput" id="@cdktf/provider-databricks.cluster.Cluster.property.numWorkersInput"></a>

```go
func NumWorkersInput() *f64
```

- *Type:* *f64

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `RuntimeEngineInput`<sup>Optional</sup> <a name="RuntimeEngineInput" id="@cdktf/provider-databricks.cluster.Cluster.property.runtimeEngineInput"></a>

```go
func RuntimeEngineInput() *string
```

- *Type:* *string

---

##### `SingleUserNameInput`<sup>Optional</sup> <a name="SingleUserNameInput" id="@cdktf/provider-databricks.cluster.Cluster.property.singleUserNameInput"></a>

```go
func SingleUserNameInput() *string
```

- *Type:* *string

---

##### `SparkConfInput`<sup>Optional</sup> <a name="SparkConfInput" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkConfInput"></a>

```go
func SparkConfInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SparkEnvVarsInput`<sup>Optional</sup> <a name="SparkEnvVarsInput" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkEnvVarsInput"></a>

```go
func SparkEnvVarsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SparkVersionInput`<sup>Optional</sup> <a name="SparkVersionInput" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkVersionInput"></a>

```go
func SparkVersionInput() *string
```

- *Type:* *string

---

##### `SshPublicKeysInput`<sup>Optional</sup> <a name="SshPublicKeysInput" id="@cdktf/provider-databricks.cluster.Cluster.property.sshPublicKeysInput"></a>

```go
func SshPublicKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-databricks.cluster.Cluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkloadTypeInput`<sup>Optional</sup> <a name="WorkloadTypeInput" id="@cdktf/provider-databricks.cluster.Cluster.property.workloadTypeInput"></a>

```go
func WorkloadTypeInput() ClusterWorkloadType
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a>

---

##### `ApplyPolicyDefaultValues`<sup>Required</sup> <a name="ApplyPolicyDefaultValues" id="@cdktf/provider-databricks.cluster.Cluster.property.applyPolicyDefaultValues"></a>

```go
func ApplyPolicyDefaultValues() interface{}
```

- *Type:* interface{}

---

##### `AutoterminationMinutes`<sup>Required</sup> <a name="AutoterminationMinutes" id="@cdktf/provider-databricks.cluster.Cluster.property.autoterminationMinutes"></a>

```go
func AutoterminationMinutes() *f64
```

- *Type:* *f64

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktf/provider-databricks.cluster.Cluster.property.customTags"></a>

```go
func CustomTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DataSecurityMode`<sup>Required</sup> <a name="DataSecurityMode" id="@cdktf/provider-databricks.cluster.Cluster.property.dataSecurityMode"></a>

```go
func DataSecurityMode() *string
```

- *Type:* *string

---

##### `DriverInstancePoolId`<sup>Required</sup> <a name="DriverInstancePoolId" id="@cdktf/provider-databricks.cluster.Cluster.property.driverInstancePoolId"></a>

```go
func DriverInstancePoolId() *string
```

- *Type:* *string

---

##### `DriverNodeTypeId`<sup>Required</sup> <a name="DriverNodeTypeId" id="@cdktf/provider-databricks.cluster.Cluster.property.driverNodeTypeId"></a>

```go
func DriverNodeTypeId() *string
```

- *Type:* *string

---

##### `EnableElasticDisk`<sup>Required</sup> <a name="EnableElasticDisk" id="@cdktf/provider-databricks.cluster.Cluster.property.enableElasticDisk"></a>

```go
func EnableElasticDisk() interface{}
```

- *Type:* interface{}

---

##### `EnableLocalDiskEncryption`<sup>Required</sup> <a name="EnableLocalDiskEncryption" id="@cdktf/provider-databricks.cluster.Cluster.property.enableLocalDiskEncryption"></a>

```go
func EnableLocalDiskEncryption() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.cluster.Cluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdempotencyToken`<sup>Required</sup> <a name="IdempotencyToken" id="@cdktf/provider-databricks.cluster.Cluster.property.idempotencyToken"></a>

```go
func IdempotencyToken() *string
```

- *Type:* *string

---

##### `InstancePoolId`<sup>Required</sup> <a name="InstancePoolId" id="@cdktf/provider-databricks.cluster.Cluster.property.instancePoolId"></a>

```go
func InstancePoolId() *string
```

- *Type:* *string

---

##### `IsPinned`<sup>Required</sup> <a name="IsPinned" id="@cdktf/provider-databricks.cluster.Cluster.property.isPinned"></a>

```go
func IsPinned() interface{}
```

- *Type:* interface{}

---

##### `NodeTypeId`<sup>Required</sup> <a name="NodeTypeId" id="@cdktf/provider-databricks.cluster.Cluster.property.nodeTypeId"></a>

```go
func NodeTypeId() *string
```

- *Type:* *string

---

##### `NumWorkers`<sup>Required</sup> <a name="NumWorkers" id="@cdktf/provider-databricks.cluster.Cluster.property.numWorkers"></a>

```go
func NumWorkers() *f64
```

- *Type:* *f64

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-databricks.cluster.Cluster.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `RuntimeEngine`<sup>Required</sup> <a name="RuntimeEngine" id="@cdktf/provider-databricks.cluster.Cluster.property.runtimeEngine"></a>

```go
func RuntimeEngine() *string
```

- *Type:* *string

---

##### `SingleUserName`<sup>Required</sup> <a name="SingleUserName" id="@cdktf/provider-databricks.cluster.Cluster.property.singleUserName"></a>

```go
func SingleUserName() *string
```

- *Type:* *string

---

##### `SparkConf`<sup>Required</sup> <a name="SparkConf" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkConf"></a>

```go
func SparkConf() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SparkEnvVars`<sup>Required</sup> <a name="SparkEnvVars" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkEnvVars"></a>

```go
func SparkEnvVars() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SparkVersion`<sup>Required</sup> <a name="SparkVersion" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkVersion"></a>

```go
func SparkVersion() *string
```

- *Type:* *string

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktf/provider-databricks.cluster.Cluster.property.sshPublicKeys"></a>

```go
func SshPublicKeys() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.cluster.Cluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterAutoscale <a name="ClusterAutoscale" id="@cdktf/provider-databricks.cluster.ClusterAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterAutoscale.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterAutoscale {
	MaxWorkers: *f64,
	MinWorkers: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#max_workers Cluster#max_workers}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale.property.minWorkers">MinWorkers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#min_workers Cluster#min_workers}. |

---

##### `MaxWorkers`<sup>Optional</sup> <a name="MaxWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscale.property.maxWorkers"></a>

```go
MaxWorkers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#max_workers Cluster#max_workers}.

---

##### `MinWorkers`<sup>Optional</sup> <a name="MinWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscale.property.minWorkers"></a>

```go
MinWorkers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#min_workers Cluster#min_workers}.

---

### ClusterAwsAttributes <a name="ClusterAwsAttributes" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterAwsAttributes {
	Availability: *string,
	EbsVolumeCount: *f64,
	EbsVolumeIops: *f64,
	EbsVolumeSize: *f64,
	EbsVolumeThroughput: *f64,
	EbsVolumeType: *string,
	FirstOnDemand: *f64,
	InstanceProfileArn: *string,
	SpotBidPricePercent: *f64,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.availability">Availability</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#availability Cluster#availability}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeCount">EbsVolumeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ebs_volume_count Cluster#ebs_volume_count}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeIops">EbsVolumeIops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ebs_volume_iops Cluster#ebs_volume_iops}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeSize">EbsVolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ebs_volume_size Cluster#ebs_volume_size}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeThroughput">EbsVolumeThroughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ebs_volume_throughput Cluster#ebs_volume_throughput}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeType">EbsVolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ebs_volume_type Cluster#ebs_volume_type}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.firstOnDemand">FirstOnDemand</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#first_on_demand Cluster#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#instance_profile_arn Cluster#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.spotBidPricePercent">SpotBidPricePercent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#spot_bid_price_percent Cluster#spot_bid_price_percent}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.zoneId">ZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#zone_id Cluster#zone_id}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.availability"></a>

```go
Availability *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#availability Cluster#availability}.

---

##### `EbsVolumeCount`<sup>Optional</sup> <a name="EbsVolumeCount" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeCount"></a>

```go
EbsVolumeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ebs_volume_count Cluster#ebs_volume_count}.

---

##### `EbsVolumeIops`<sup>Optional</sup> <a name="EbsVolumeIops" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeIops"></a>

```go
EbsVolumeIops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ebs_volume_iops Cluster#ebs_volume_iops}.

---

##### `EbsVolumeSize`<sup>Optional</sup> <a name="EbsVolumeSize" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeSize"></a>

```go
EbsVolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ebs_volume_size Cluster#ebs_volume_size}.

---

##### `EbsVolumeThroughput`<sup>Optional</sup> <a name="EbsVolumeThroughput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeThroughput"></a>

```go
EbsVolumeThroughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ebs_volume_throughput Cluster#ebs_volume_throughput}.

---

##### `EbsVolumeType`<sup>Optional</sup> <a name="EbsVolumeType" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeType"></a>

```go
EbsVolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ebs_volume_type Cluster#ebs_volume_type}.

---

##### `FirstOnDemand`<sup>Optional</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.firstOnDemand"></a>

```go
FirstOnDemand *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#first_on_demand Cluster#first_on_demand}.

---

##### `InstanceProfileArn`<sup>Optional</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.instanceProfileArn"></a>

```go
InstanceProfileArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#instance_profile_arn Cluster#instance_profile_arn}.

---

##### `SpotBidPricePercent`<sup>Optional</sup> <a name="SpotBidPricePercent" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.spotBidPricePercent"></a>

```go
SpotBidPricePercent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#spot_bid_price_percent Cluster#spot_bid_price_percent}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#zone_id Cluster#zone_id}.

---

### ClusterAzureAttributes <a name="ClusterAzureAttributes" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterAzureAttributes {
	Availability: *string,
	FirstOnDemand: *f64,
	LogAnalyticsInfo: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterAzureAttributesLogAnalyticsInfo,
	SpotBidMaxPrice: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.availability">Availability</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#availability Cluster#availability}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.firstOnDemand">FirstOnDemand</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#first_on_demand Cluster#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.logAnalyticsInfo">LogAnalyticsInfo</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo">ClusterAzureAttributesLogAnalyticsInfo</a></code> | log_analytics_info block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.spotBidMaxPrice">SpotBidMaxPrice</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#spot_bid_max_price Cluster#spot_bid_max_price}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.availability"></a>

```go
Availability *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#availability Cluster#availability}.

---

##### `FirstOnDemand`<sup>Optional</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.firstOnDemand"></a>

```go
FirstOnDemand *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#first_on_demand Cluster#first_on_demand}.

---

##### `LogAnalyticsInfo`<sup>Optional</sup> <a name="LogAnalyticsInfo" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.logAnalyticsInfo"></a>

```go
LogAnalyticsInfo ClusterAzureAttributesLogAnalyticsInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo">ClusterAzureAttributesLogAnalyticsInfo</a>

log_analytics_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#log_analytics_info Cluster#log_analytics_info}

---

##### `SpotBidMaxPrice`<sup>Optional</sup> <a name="SpotBidMaxPrice" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.spotBidMaxPrice"></a>

```go
SpotBidMaxPrice *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#spot_bid_max_price Cluster#spot_bid_max_price}.

---

### ClusterAzureAttributesLogAnalyticsInfo <a name="ClusterAzureAttributesLogAnalyticsInfo" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterAzureAttributesLogAnalyticsInfo {
	LogAnalyticsPrimaryKey: *string,
	LogAnalyticsWorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo.property.logAnalyticsPrimaryKey">LogAnalyticsPrimaryKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#log_analytics_primary_key Cluster#log_analytics_primary_key}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#log_analytics_workspace_id Cluster#log_analytics_workspace_id}. |

---

##### `LogAnalyticsPrimaryKey`<sup>Optional</sup> <a name="LogAnalyticsPrimaryKey" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo.property.logAnalyticsPrimaryKey"></a>

```go
LogAnalyticsPrimaryKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#log_analytics_primary_key Cluster#log_analytics_primary_key}.

---

##### `LogAnalyticsWorkspaceId`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo.property.logAnalyticsWorkspaceId"></a>

```go
LogAnalyticsWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#log_analytics_workspace_id Cluster#log_analytics_workspace_id}.

---

### ClusterClusterLogConf <a name="ClusterClusterLogConf" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConf.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterClusterLogConf {
	Dbfs: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterClusterLogConfDbfs,
	S3: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterClusterLogConfS3,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a></code> | dbfs block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a></code> | s3 block. |

---

##### `Dbfs`<sup>Optional</sup> <a name="Dbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConf.property.dbfs"></a>

```go
Dbfs ClusterClusterLogConfDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#dbfs Cluster#dbfs}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConf.property.s3"></a>

```go
S3 ClusterClusterLogConfS3
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#s3 Cluster#s3}

---

### ClusterClusterLogConfDbfs <a name="ClusterClusterLogConfDbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterClusterLogConfDbfs {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterClusterLogConfS3 <a name="ClusterClusterLogConfS3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterClusterLogConfS3 {
	Destination: *string,
	CannedAcl: *string,
	EnableEncryption: interface{},
	EncryptionType: *string,
	Endpoint: *string,
	KmsKey: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.cannedAcl">CannedAcl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#canned_acl Cluster#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.enableEncryption">EnableEncryption</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#enable_encryption Cluster#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#encryption_type Cluster#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#endpoint Cluster#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.kmsKey">KmsKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#kms_key Cluster#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#region Cluster#region}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}.

---

##### `CannedAcl`<sup>Optional</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.cannedAcl"></a>

```go
CannedAcl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#canned_acl Cluster#canned_acl}.

---

##### `EnableEncryption`<sup>Optional</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.enableEncryption"></a>

```go
EnableEncryption interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#enable_encryption Cluster#enable_encryption}.

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#encryption_type Cluster#encryption_type}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#endpoint Cluster#endpoint}.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#kms_key Cluster#kms_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#region Cluster#region}.

---

### ClusterClusterMountInfo <a name="ClusterClusterMountInfo" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterClusterMountInfo {
	LocalMountDirPath: *string,
	NetworkFilesystemInfo: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterClusterMountInfoNetworkFilesystemInfo,
	RemoteMountDirPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.localMountDirPath">LocalMountDirPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#local_mount_dir_path Cluster#local_mount_dir_path}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.networkFilesystemInfo">NetworkFilesystemInfo</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a></code> | network_filesystem_info block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.remoteMountDirPath">RemoteMountDirPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#remote_mount_dir_path Cluster#remote_mount_dir_path}. |

---

##### `LocalMountDirPath`<sup>Required</sup> <a name="LocalMountDirPath" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.localMountDirPath"></a>

```go
LocalMountDirPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#local_mount_dir_path Cluster#local_mount_dir_path}.

---

##### `NetworkFilesystemInfo`<sup>Required</sup> <a name="NetworkFilesystemInfo" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.networkFilesystemInfo"></a>

```go
NetworkFilesystemInfo ClusterClusterMountInfoNetworkFilesystemInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a>

network_filesystem_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#network_filesystem_info Cluster#network_filesystem_info}

---

##### `RemoteMountDirPath`<sup>Optional</sup> <a name="RemoteMountDirPath" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.remoteMountDirPath"></a>

```go
RemoteMountDirPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#remote_mount_dir_path Cluster#remote_mount_dir_path}.

---

### ClusterClusterMountInfoNetworkFilesystemInfo <a name="ClusterClusterMountInfoNetworkFilesystemInfo" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterClusterMountInfoNetworkFilesystemInfo {
	ServerAddress: *string,
	MountOptions: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.property.serverAddress">ServerAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#server_address Cluster#server_address}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.property.mountOptions">MountOptions</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#mount_options Cluster#mount_options}. |

---

##### `ServerAddress`<sup>Required</sup> <a name="ServerAddress" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.property.serverAddress"></a>

```go
ServerAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#server_address Cluster#server_address}.

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.property.mountOptions"></a>

```go
MountOptions *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#mount_options Cluster#mount_options}.

---

### ClusterConfig <a name="ClusterConfig" id="@cdktf/provider-databricks.cluster.ClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SparkVersion: *string,
	ApplyPolicyDefaultValues: interface{},
	Autoscale: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterAutoscale,
	AutoterminationMinutes: *f64,
	AwsAttributes: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterAwsAttributes,
	AzureAttributes: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterAzureAttributes,
	ClusterId: *string,
	ClusterLogConf: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterClusterLogConf,
	ClusterMountInfo: interface{},
	ClusterName: *string,
	CustomTags: *map[string]*string,
	DataSecurityMode: *string,
	DockerImage: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterDockerImage,
	DriverInstancePoolId: *string,
	DriverNodeTypeId: *string,
	EnableElasticDisk: interface{},
	EnableLocalDiskEncryption: interface{},
	GcpAttributes: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterGcpAttributes,
	Id: *string,
	IdempotencyToken: *string,
	InitScripts: interface{},
	InstancePoolId: *string,
	IsPinned: interface{},
	Library: interface{},
	NodeTypeId: *string,
	NumWorkers: *f64,
	PolicyId: *string,
	RuntimeEngine: *string,
	SingleUserName: *string,
	SparkConf: *map[string]*string,
	SparkEnvVars: *map[string]*string,
	SshPublicKeys: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterTimeouts,
	WorkloadType: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterWorkloadType,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkVersion">SparkVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#spark_version Cluster#spark_version}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.applyPolicyDefaultValues">ApplyPolicyDefaultValues</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#apply_policy_default_values Cluster#apply_policy_default_values}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.autoterminationMinutes">AutoterminationMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#autotermination_minutes Cluster#autotermination_minutes}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.awsAttributes">AwsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a></code> | aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.azureAttributes">AzureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a></code> | azure_attributes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#cluster_id Cluster#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterLogConf">ClusterLogConf</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a></code> | cluster_log_conf block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterMountInfo">ClusterMountInfo</a></code> | <code>interface{}</code> | cluster_mount_info block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#cluster_name Cluster#cluster_name}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.customTags">CustomTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#custom_tags Cluster#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.dataSecurityMode">DataSecurityMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#data_security_mode Cluster#data_security_mode}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.dockerImage">DockerImage</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a></code> | docker_image block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.driverInstancePoolId">DriverInstancePoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#driver_instance_pool_id Cluster#driver_instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.driverNodeTypeId">DriverNodeTypeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#driver_node_type_id Cluster#driver_node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.enableElasticDisk">EnableElasticDisk</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#enable_elastic_disk Cluster#enable_elastic_disk}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.enableLocalDiskEncryption">EnableLocalDiskEncryption</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#enable_local_disk_encryption Cluster#enable_local_disk_encryption}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.gcpAttributes">GcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a></code> | gcp_attributes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#id Cluster#id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.idempotencyToken">IdempotencyToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#idempotency_token Cluster#idempotency_token}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.initScripts">InitScripts</a></code> | <code>interface{}</code> | init_scripts block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.instancePoolId">InstancePoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#instance_pool_id Cluster#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.isPinned">IsPinned</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#is_pinned Cluster#is_pinned}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.library">Library</a></code> | <code>interface{}</code> | library block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.nodeTypeId">NodeTypeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#node_type_id Cluster#node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.numWorkers">NumWorkers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#num_workers Cluster#num_workers}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#policy_id Cluster#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.runtimeEngine">RuntimeEngine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#runtime_engine Cluster#runtime_engine}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.singleUserName">SingleUserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#single_user_name Cluster#single_user_name}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkConf">SparkConf</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#spark_conf Cluster#spark_conf}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkEnvVars">SparkEnvVars</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#spark_env_vars Cluster#spark_env_vars}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ssh_public_keys Cluster#ssh_public_keys}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.workloadType">WorkloadType</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a></code> | workload_type block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SparkVersion`<sup>Required</sup> <a name="SparkVersion" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkVersion"></a>

```go
SparkVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#spark_version Cluster#spark_version}.

---

##### `ApplyPolicyDefaultValues`<sup>Optional</sup> <a name="ApplyPolicyDefaultValues" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.applyPolicyDefaultValues"></a>

```go
ApplyPolicyDefaultValues interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#apply_policy_default_values Cluster#apply_policy_default_values}.

---

##### `Autoscale`<sup>Optional</sup> <a name="Autoscale" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.autoscale"></a>

```go
Autoscale ClusterAutoscale
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#autoscale Cluster#autoscale}

---

##### `AutoterminationMinutes`<sup>Optional</sup> <a name="AutoterminationMinutes" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.autoterminationMinutes"></a>

```go
AutoterminationMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#autotermination_minutes Cluster#autotermination_minutes}.

---

##### `AwsAttributes`<sup>Optional</sup> <a name="AwsAttributes" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.awsAttributes"></a>

```go
AwsAttributes ClusterAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#aws_attributes Cluster#aws_attributes}

---

##### `AzureAttributes`<sup>Optional</sup> <a name="AzureAttributes" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.azureAttributes"></a>

```go
AzureAttributes ClusterAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#azure_attributes Cluster#azure_attributes}

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#cluster_id Cluster#cluster_id}.

---

##### `ClusterLogConf`<sup>Optional</sup> <a name="ClusterLogConf" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterLogConf"></a>

```go
ClusterLogConf ClusterClusterLogConf
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a>

cluster_log_conf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#cluster_log_conf Cluster#cluster_log_conf}

---

##### `ClusterMountInfo`<sup>Optional</sup> <a name="ClusterMountInfo" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterMountInfo"></a>

```go
ClusterMountInfo interface{}
```

- *Type:* interface{}

cluster_mount_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#cluster_mount_info Cluster#cluster_mount_info}

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#cluster_name Cluster#cluster_name}.

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.customTags"></a>

```go
CustomTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#custom_tags Cluster#custom_tags}.

---

##### `DataSecurityMode`<sup>Optional</sup> <a name="DataSecurityMode" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.dataSecurityMode"></a>

```go
DataSecurityMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#data_security_mode Cluster#data_security_mode}.

---

##### `DockerImage`<sup>Optional</sup> <a name="DockerImage" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.dockerImage"></a>

```go
DockerImage ClusterDockerImage
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a>

docker_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#docker_image Cluster#docker_image}

---

##### `DriverInstancePoolId`<sup>Optional</sup> <a name="DriverInstancePoolId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.driverInstancePoolId"></a>

```go
DriverInstancePoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#driver_instance_pool_id Cluster#driver_instance_pool_id}.

---

##### `DriverNodeTypeId`<sup>Optional</sup> <a name="DriverNodeTypeId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.driverNodeTypeId"></a>

```go
DriverNodeTypeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#driver_node_type_id Cluster#driver_node_type_id}.

---

##### `EnableElasticDisk`<sup>Optional</sup> <a name="EnableElasticDisk" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.enableElasticDisk"></a>

```go
EnableElasticDisk interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#enable_elastic_disk Cluster#enable_elastic_disk}.

---

##### `EnableLocalDiskEncryption`<sup>Optional</sup> <a name="EnableLocalDiskEncryption" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.enableLocalDiskEncryption"></a>

```go
EnableLocalDiskEncryption interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#enable_local_disk_encryption Cluster#enable_local_disk_encryption}.

---

##### `GcpAttributes`<sup>Optional</sup> <a name="GcpAttributes" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.gcpAttributes"></a>

```go
GcpAttributes ClusterGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#gcp_attributes Cluster#gcp_attributes}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#id Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdempotencyToken`<sup>Optional</sup> <a name="IdempotencyToken" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.idempotencyToken"></a>

```go
IdempotencyToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#idempotency_token Cluster#idempotency_token}.

---

##### `InitScripts`<sup>Optional</sup> <a name="InitScripts" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.initScripts"></a>

```go
InitScripts interface{}
```

- *Type:* interface{}

init_scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#init_scripts Cluster#init_scripts}

---

##### `InstancePoolId`<sup>Optional</sup> <a name="InstancePoolId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.instancePoolId"></a>

```go
InstancePoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#instance_pool_id Cluster#instance_pool_id}.

---

##### `IsPinned`<sup>Optional</sup> <a name="IsPinned" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.isPinned"></a>

```go
IsPinned interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#is_pinned Cluster#is_pinned}.

---

##### `Library`<sup>Optional</sup> <a name="Library" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.library"></a>

```go
Library interface{}
```

- *Type:* interface{}

library block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#library Cluster#library}

---

##### `NodeTypeId`<sup>Optional</sup> <a name="NodeTypeId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.nodeTypeId"></a>

```go
NodeTypeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#node_type_id Cluster#node_type_id}.

---

##### `NumWorkers`<sup>Optional</sup> <a name="NumWorkers" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.numWorkers"></a>

```go
NumWorkers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#num_workers Cluster#num_workers}.

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#policy_id Cluster#policy_id}.

---

##### `RuntimeEngine`<sup>Optional</sup> <a name="RuntimeEngine" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.runtimeEngine"></a>

```go
RuntimeEngine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#runtime_engine Cluster#runtime_engine}.

---

##### `SingleUserName`<sup>Optional</sup> <a name="SingleUserName" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.singleUserName"></a>

```go
SingleUserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#single_user_name Cluster#single_user_name}.

---

##### `SparkConf`<sup>Optional</sup> <a name="SparkConf" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkConf"></a>

```go
SparkConf *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#spark_conf Cluster#spark_conf}.

---

##### `SparkEnvVars`<sup>Optional</sup> <a name="SparkEnvVars" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkEnvVars"></a>

```go
SparkEnvVars *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#spark_env_vars Cluster#spark_env_vars}.

---

##### `SshPublicKeys`<sup>Optional</sup> <a name="SshPublicKeys" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.sshPublicKeys"></a>

```go
SshPublicKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ssh_public_keys Cluster#ssh_public_keys}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.timeouts"></a>

```go
Timeouts ClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#timeouts Cluster#timeouts}

---

##### `WorkloadType`<sup>Optional</sup> <a name="WorkloadType" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.workloadType"></a>

```go
WorkloadType ClusterWorkloadType
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a>

workload_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#workload_type Cluster#workload_type}

---

### ClusterDockerImage <a name="ClusterDockerImage" id="@cdktf/provider-databricks.cluster.ClusterDockerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterDockerImage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterDockerImage {
	Url: *string,
	BasicAuth: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterDockerImageBasicAuth,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#url Cluster#url}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage.property.basicAuth">BasicAuth</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a></code> | basic_auth block. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.cluster.ClusterDockerImage.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#url Cluster#url}.

---

##### `BasicAuth`<sup>Optional</sup> <a name="BasicAuth" id="@cdktf/provider-databricks.cluster.ClusterDockerImage.property.basicAuth"></a>

```go
BasicAuth ClusterDockerImageBasicAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#basic_auth Cluster#basic_auth}

---

### ClusterDockerImageBasicAuth <a name="ClusterDockerImageBasicAuth" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterDockerImageBasicAuth {
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#password Cluster#password}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#username Cluster#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#password Cluster#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#username Cluster#username}.

---

### ClusterGcpAttributes <a name="ClusterGcpAttributes" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterGcpAttributes {
	Availability: *string,
	BootDiskSize: *f64,
	GoogleServiceAccount: *string,
	LocalSsdCount: *f64,
	UsePreemptibleExecutors: interface{},
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.availability">Availability</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#availability Cluster#availability}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.bootDiskSize">BootDiskSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#boot_disk_size Cluster#boot_disk_size}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.googleServiceAccount">GoogleServiceAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#google_service_account Cluster#google_service_account}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.localSsdCount">LocalSsdCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#local_ssd_count Cluster#local_ssd_count}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.usePreemptibleExecutors">UsePreemptibleExecutors</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#use_preemptible_executors Cluster#use_preemptible_executors}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.zoneId">ZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#zone_id Cluster#zone_id}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.availability"></a>

```go
Availability *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#availability Cluster#availability}.

---

##### `BootDiskSize`<sup>Optional</sup> <a name="BootDiskSize" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.bootDiskSize"></a>

```go
BootDiskSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#boot_disk_size Cluster#boot_disk_size}.

---

##### `GoogleServiceAccount`<sup>Optional</sup> <a name="GoogleServiceAccount" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.googleServiceAccount"></a>

```go
GoogleServiceAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#google_service_account Cluster#google_service_account}.

---

##### `LocalSsdCount`<sup>Optional</sup> <a name="LocalSsdCount" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.localSsdCount"></a>

```go
LocalSsdCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#local_ssd_count Cluster#local_ssd_count}.

---

##### `UsePreemptibleExecutors`<sup>Optional</sup> <a name="UsePreemptibleExecutors" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.usePreemptibleExecutors"></a>

```go
UsePreemptibleExecutors interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#use_preemptible_executors Cluster#use_preemptible_executors}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#zone_id Cluster#zone_id}.

---

### ClusterInitScripts <a name="ClusterInitScripts" id="@cdktf/provider-databricks.cluster.ClusterInitScripts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterInitScripts {
	Abfss: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterInitScriptsAbfss,
	Dbfs: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterInitScriptsDbfs,
	File: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterInitScriptsFile,
	Gcs: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterInitScriptsGcs,
	S3: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterInitScriptsS3,
	Volumes: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterInitScriptsVolumes,
	Workspace: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterInitScriptsWorkspace,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.abfss">Abfss</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a></code> | abfss block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a></code> | dbfs block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.file">File</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.gcs">Gcs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a></code> | gcs block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a></code> | volumes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.workspace">Workspace</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a></code> | workspace block. |

---

##### `Abfss`<sup>Optional</sup> <a name="Abfss" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.abfss"></a>

```go
Abfss ClusterInitScriptsAbfss
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a>

abfss block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#abfss Cluster#abfss}

---

##### `Dbfs`<sup>Optional</sup> <a name="Dbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.dbfs"></a>

```go
Dbfs ClusterInitScriptsDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#dbfs Cluster#dbfs}

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.file"></a>

```go
File ClusterInitScriptsFile
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a>

file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#file Cluster#file}

---

##### `Gcs`<sup>Optional</sup> <a name="Gcs" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.gcs"></a>

```go
Gcs ClusterInitScriptsGcs
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#gcs Cluster#gcs}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.s3"></a>

```go
S3 ClusterInitScriptsS3
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#s3 Cluster#s3}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.volumes"></a>

```go
Volumes ClusterInitScriptsVolumes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a>

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#volumes Cluster#volumes}

---

##### `Workspace`<sup>Optional</sup> <a name="Workspace" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.workspace"></a>

```go
Workspace ClusterInitScriptsWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a>

workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#workspace Cluster#workspace}

---

### ClusterInitScriptsAbfss <a name="ClusterInitScriptsAbfss" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterInitScriptsAbfss {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsDbfs <a name="ClusterInitScriptsDbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterInitScriptsDbfs {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsFile <a name="ClusterInitScriptsFile" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterInitScriptsFile {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFile.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsGcs <a name="ClusterInitScriptsGcs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterInitScriptsGcs {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsS3 <a name="ClusterInitScriptsS3" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterInitScriptsS3 {
	Destination: *string,
	CannedAcl: *string,
	EnableEncryption: interface{},
	EncryptionType: *string,
	Endpoint: *string,
	KmsKey: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.cannedAcl">CannedAcl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#canned_acl Cluster#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.enableEncryption">EnableEncryption</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#enable_encryption Cluster#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#encryption_type Cluster#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#endpoint Cluster#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.kmsKey">KmsKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#kms_key Cluster#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#region Cluster#region}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}.

---

##### `CannedAcl`<sup>Optional</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.cannedAcl"></a>

```go
CannedAcl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#canned_acl Cluster#canned_acl}.

---

##### `EnableEncryption`<sup>Optional</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.enableEncryption"></a>

```go
EnableEncryption interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#enable_encryption Cluster#enable_encryption}.

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#encryption_type Cluster#encryption_type}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#endpoint Cluster#endpoint}.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#kms_key Cluster#kms_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#region Cluster#region}.

---

### ClusterInitScriptsVolumes <a name="ClusterInitScriptsVolumes" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterInitScriptsVolumes {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsWorkspace <a name="ClusterInitScriptsWorkspace" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterInitScriptsWorkspace {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterLibrary <a name="ClusterLibrary" id="@cdktf/provider-databricks.cluster.ClusterLibrary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterLibrary.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterLibrary {
	Cran: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterLibraryCran,
	Egg: *string,
	Jar: *string,
	Maven: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterLibraryMaven,
	Pypi: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterLibraryPypi,
	Whl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.cran">Cran</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a></code> | cran block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.egg">Egg</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#egg Cluster#egg}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.jar">Jar</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#jar Cluster#jar}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.maven">Maven</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a></code> | maven block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.pypi">Pypi</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a></code> | pypi block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.whl">Whl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#whl Cluster#whl}. |

---

##### `Cran`<sup>Optional</sup> <a name="Cran" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.cran"></a>

```go
Cran ClusterLibraryCran
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a>

cran block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#cran Cluster#cran}

---

##### `Egg`<sup>Optional</sup> <a name="Egg" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.egg"></a>

```go
Egg *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#egg Cluster#egg}.

---

##### `Jar`<sup>Optional</sup> <a name="Jar" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.jar"></a>

```go
Jar *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#jar Cluster#jar}.

---

##### `Maven`<sup>Optional</sup> <a name="Maven" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.maven"></a>

```go
Maven ClusterLibraryMaven
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a>

maven block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#maven Cluster#maven}

---

##### `Pypi`<sup>Optional</sup> <a name="Pypi" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.pypi"></a>

```go
Pypi ClusterLibraryPypi
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a>

pypi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#pypi Cluster#pypi}

---

##### `Whl`<sup>Optional</sup> <a name="Whl" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.whl"></a>

```go
Whl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#whl Cluster#whl}.

---

### ClusterLibraryCran <a name="ClusterLibraryCran" id="@cdktf/provider-databricks.cluster.ClusterLibraryCran"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterLibraryCran.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterLibraryCran {
	Package: *string,
	Repo: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran.property.package">Package</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#package Cluster#package}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran.property.repo">Repo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#repo Cluster#repo}. |

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.cluster.ClusterLibraryCran.property.package"></a>

```go
Package *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#package Cluster#package}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryCran.property.repo"></a>

```go
Repo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#repo Cluster#repo}.

---

### ClusterLibraryMaven <a name="ClusterLibraryMaven" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterLibraryMaven {
	Coordinates: *string,
	Exclusions: *[]*string,
	Repo: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.coordinates">Coordinates</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#coordinates Cluster#coordinates}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#exclusions Cluster#exclusions}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.repo">Repo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#repo Cluster#repo}. |

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.coordinates"></a>

```go
Coordinates *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#coordinates Cluster#coordinates}.

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.exclusions"></a>

```go
Exclusions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#exclusions Cluster#exclusions}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.repo"></a>

```go
Repo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#repo Cluster#repo}.

---

### ClusterLibraryPypi <a name="ClusterLibraryPypi" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypi.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterLibraryPypi {
	Package: *string,
	Repo: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi.property.package">Package</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#package Cluster#package}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi.property.repo">Repo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#repo Cluster#repo}. |

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypi.property.package"></a>

```go
Package *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#package Cluster#package}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypi.property.repo"></a>

```go
Repo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#repo Cluster#repo}.

---

### ClusterTimeouts <a name="ClusterTimeouts" id="@cdktf/provider-databricks.cluster.ClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#create Cluster#create}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#delete Cluster#delete}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#update Cluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-databricks.cluster.ClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#create Cluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-databricks.cluster.ClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#delete Cluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-databricks.cluster.ClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#update Cluster#update}.

---

### ClusterWorkloadType <a name="ClusterWorkloadType" id="@cdktf/provider-databricks.cluster.ClusterWorkloadType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterWorkloadType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterWorkloadType {
	Clients: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.cluster.ClusterWorkloadTypeClients,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType.property.clients">Clients</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a></code> | clients block. |

---

##### `Clients`<sup>Required</sup> <a name="Clients" id="@cdktf/provider-databricks.cluster.ClusterWorkloadType.property.clients"></a>

```go
Clients ClusterWorkloadTypeClients
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a>

clients block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#clients Cluster#clients}

---

### ClusterWorkloadTypeClients <a name="ClusterWorkloadTypeClients" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

&cluster.ClusterWorkloadTypeClients {
	Jobs: interface{},
	Notebooks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.property.jobs">Jobs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#jobs Cluster#jobs}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.property.notebooks">Notebooks</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#notebooks Cluster#notebooks}. |

---

##### `Jobs`<sup>Optional</sup> <a name="Jobs" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.property.jobs"></a>

```go
Jobs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#jobs Cluster#jobs}.

---

##### `Notebooks`<sup>Optional</sup> <a name="Notebooks" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.property.notebooks"></a>

```go
Notebooks interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#notebooks Cluster#notebooks}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterAutoscaleOutputReference <a name="ClusterAutoscaleOutputReference" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterAutoscaleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterAutoscaleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resetMaxWorkers">ResetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resetMinWorkers">ResetMinWorkers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxWorkers` <a name="ResetMaxWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resetMaxWorkers"></a>

```go
func ResetMaxWorkers()
```

##### `ResetMinWorkers` <a name="ResetMinWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resetMinWorkers"></a>

```go
func ResetMinWorkers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.maxWorkersInput">MaxWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.minWorkersInput">MinWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.minWorkers">MinWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxWorkersInput`<sup>Optional</sup> <a name="MaxWorkersInput" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.maxWorkersInput"></a>

```go
func MaxWorkersInput() *f64
```

- *Type:* *f64

---

##### `MinWorkersInput`<sup>Optional</sup> <a name="MinWorkersInput" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.minWorkersInput"></a>

```go
func MinWorkersInput() *f64
```

- *Type:* *f64

---

##### `MaxWorkers`<sup>Required</sup> <a name="MaxWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.maxWorkers"></a>

```go
func MaxWorkers() *f64
```

- *Type:* *f64

---

##### `MinWorkers`<sup>Required</sup> <a name="MinWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.minWorkers"></a>

```go
func MinWorkers() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterAutoscale
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a>

---


### ClusterAwsAttributesOutputReference <a name="ClusterAwsAttributesOutputReference" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterAwsAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterAwsAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeCount">ResetEbsVolumeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeIops">ResetEbsVolumeIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeSize">ResetEbsVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeThroughput">ResetEbsVolumeThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeType">ResetEbsVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetFirstOnDemand">ResetFirstOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetInstanceProfileArn">ResetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetSpotBidPricePercent">ResetSpotBidPricePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetAvailability"></a>

```go
func ResetAvailability()
```

##### `ResetEbsVolumeCount` <a name="ResetEbsVolumeCount" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeCount"></a>

```go
func ResetEbsVolumeCount()
```

##### `ResetEbsVolumeIops` <a name="ResetEbsVolumeIops" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeIops"></a>

```go
func ResetEbsVolumeIops()
```

##### `ResetEbsVolumeSize` <a name="ResetEbsVolumeSize" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeSize"></a>

```go
func ResetEbsVolumeSize()
```

##### `ResetEbsVolumeThroughput` <a name="ResetEbsVolumeThroughput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeThroughput"></a>

```go
func ResetEbsVolumeThroughput()
```

##### `ResetEbsVolumeType` <a name="ResetEbsVolumeType" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeType"></a>

```go
func ResetEbsVolumeType()
```

##### `ResetFirstOnDemand` <a name="ResetFirstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetFirstOnDemand"></a>

```go
func ResetFirstOnDemand()
```

##### `ResetInstanceProfileArn` <a name="ResetInstanceProfileArn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetInstanceProfileArn"></a>

```go
func ResetInstanceProfileArn()
```

##### `ResetSpotBidPricePercent` <a name="ResetSpotBidPricePercent" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetSpotBidPricePercent"></a>

```go
func ResetSpotBidPricePercent()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetZoneId"></a>

```go
func ResetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeCountInput">EbsVolumeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeIopsInput">EbsVolumeIopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeSizeInput">EbsVolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeThroughputInput">EbsVolumeThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeTypeInput">EbsVolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.firstOnDemandInput">FirstOnDemandInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.instanceProfileArnInput">InstanceProfileArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.spotBidPricePercentInput">SpotBidPricePercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.availability">Availability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeCount">EbsVolumeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeIops">EbsVolumeIops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeSize">EbsVolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeThroughput">EbsVolumeThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeType">EbsVolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.firstOnDemand">FirstOnDemand</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.spotBidPricePercent">SpotBidPricePercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.availabilityInput"></a>

```go
func AvailabilityInput() *string
```

- *Type:* *string

---

##### `EbsVolumeCountInput`<sup>Optional</sup> <a name="EbsVolumeCountInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeCountInput"></a>

```go
func EbsVolumeCountInput() *f64
```

- *Type:* *f64

---

##### `EbsVolumeIopsInput`<sup>Optional</sup> <a name="EbsVolumeIopsInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeIopsInput"></a>

```go
func EbsVolumeIopsInput() *f64
```

- *Type:* *f64

---

##### `EbsVolumeSizeInput`<sup>Optional</sup> <a name="EbsVolumeSizeInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeSizeInput"></a>

```go
func EbsVolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `EbsVolumeThroughputInput`<sup>Optional</sup> <a name="EbsVolumeThroughputInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeThroughputInput"></a>

```go
func EbsVolumeThroughputInput() *f64
```

- *Type:* *f64

---

##### `EbsVolumeTypeInput`<sup>Optional</sup> <a name="EbsVolumeTypeInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeTypeInput"></a>

```go
func EbsVolumeTypeInput() *string
```

- *Type:* *string

---

##### `FirstOnDemandInput`<sup>Optional</sup> <a name="FirstOnDemandInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.firstOnDemandInput"></a>

```go
func FirstOnDemandInput() *f64
```

- *Type:* *f64

---

##### `InstanceProfileArnInput`<sup>Optional</sup> <a name="InstanceProfileArnInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.instanceProfileArnInput"></a>

```go
func InstanceProfileArnInput() *string
```

- *Type:* *string

---

##### `SpotBidPricePercentInput`<sup>Optional</sup> <a name="SpotBidPricePercentInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.spotBidPricePercentInput"></a>

```go
func SpotBidPricePercentInput() *f64
```

- *Type:* *f64

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.availability"></a>

```go
func Availability() *string
```

- *Type:* *string

---

##### `EbsVolumeCount`<sup>Required</sup> <a name="EbsVolumeCount" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeCount"></a>

```go
func EbsVolumeCount() *f64
```

- *Type:* *f64

---

##### `EbsVolumeIops`<sup>Required</sup> <a name="EbsVolumeIops" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeIops"></a>

```go
func EbsVolumeIops() *f64
```

- *Type:* *f64

---

##### `EbsVolumeSize`<sup>Required</sup> <a name="EbsVolumeSize" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeSize"></a>

```go
func EbsVolumeSize() *f64
```

- *Type:* *f64

---

##### `EbsVolumeThroughput`<sup>Required</sup> <a name="EbsVolumeThroughput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeThroughput"></a>

```go
func EbsVolumeThroughput() *f64
```

- *Type:* *f64

---

##### `EbsVolumeType`<sup>Required</sup> <a name="EbsVolumeType" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeType"></a>

```go
func EbsVolumeType() *string
```

- *Type:* *string

---

##### `FirstOnDemand`<sup>Required</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.firstOnDemand"></a>

```go
func FirstOnDemand() *f64
```

- *Type:* *f64

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.instanceProfileArn"></a>

```go
func InstanceProfileArn() *string
```

- *Type:* *string

---

##### `SpotBidPricePercent`<sup>Required</sup> <a name="SpotBidPricePercent" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.spotBidPricePercent"></a>

```go
func SpotBidPricePercent() *f64
```

- *Type:* *f64

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a>

---


### ClusterAzureAttributesLogAnalyticsInfoOutputReference <a name="ClusterAzureAttributesLogAnalyticsInfoOutputReference" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterAzureAttributesLogAnalyticsInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterAzureAttributesLogAnalyticsInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.resetLogAnalyticsPrimaryKey">ResetLogAnalyticsPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.resetLogAnalyticsWorkspaceId">ResetLogAnalyticsWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogAnalyticsPrimaryKey` <a name="ResetLogAnalyticsPrimaryKey" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.resetLogAnalyticsPrimaryKey"></a>

```go
func ResetLogAnalyticsPrimaryKey()
```

##### `ResetLogAnalyticsWorkspaceId` <a name="ResetLogAnalyticsWorkspaceId" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.resetLogAnalyticsWorkspaceId"></a>

```go
func ResetLogAnalyticsWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsPrimaryKeyInput">LogAnalyticsPrimaryKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsPrimaryKey">LogAnalyticsPrimaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo">ClusterAzureAttributesLogAnalyticsInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogAnalyticsPrimaryKeyInput`<sup>Optional</sup> <a name="LogAnalyticsPrimaryKeyInput" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsPrimaryKeyInput"></a>

```go
func LogAnalyticsPrimaryKeyInput() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```go
func LogAnalyticsWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `LogAnalyticsPrimaryKey`<sup>Required</sup> <a name="LogAnalyticsPrimaryKey" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsPrimaryKey"></a>

```go
func LogAnalyticsPrimaryKey() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsWorkspaceId"></a>

```go
func LogAnalyticsWorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterAzureAttributesLogAnalyticsInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo">ClusterAzureAttributesLogAnalyticsInfo</a>

---


### ClusterAzureAttributesOutputReference <a name="ClusterAzureAttributesOutputReference" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterAzureAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterAzureAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.putLogAnalyticsInfo">PutLogAnalyticsInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetFirstOnDemand">ResetFirstOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetLogAnalyticsInfo">ResetLogAnalyticsInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetSpotBidMaxPrice">ResetSpotBidMaxPrice</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogAnalyticsInfo` <a name="PutLogAnalyticsInfo" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.putLogAnalyticsInfo"></a>

```go
func PutLogAnalyticsInfo(value ClusterAzureAttributesLogAnalyticsInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.putLogAnalyticsInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo">ClusterAzureAttributesLogAnalyticsInfo</a>

---

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetAvailability"></a>

```go
func ResetAvailability()
```

##### `ResetFirstOnDemand` <a name="ResetFirstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetFirstOnDemand"></a>

```go
func ResetFirstOnDemand()
```

##### `ResetLogAnalyticsInfo` <a name="ResetLogAnalyticsInfo" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetLogAnalyticsInfo"></a>

```go
func ResetLogAnalyticsInfo()
```

##### `ResetSpotBidMaxPrice` <a name="ResetSpotBidMaxPrice" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetSpotBidMaxPrice"></a>

```go
func ResetSpotBidMaxPrice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.logAnalyticsInfo">LogAnalyticsInfo</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference">ClusterAzureAttributesLogAnalyticsInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.firstOnDemandInput">FirstOnDemandInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.logAnalyticsInfoInput">LogAnalyticsInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo">ClusterAzureAttributesLogAnalyticsInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.spotBidMaxPriceInput">SpotBidMaxPriceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.availability">Availability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.firstOnDemand">FirstOnDemand</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.spotBidMaxPrice">SpotBidMaxPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogAnalyticsInfo`<sup>Required</sup> <a name="LogAnalyticsInfo" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.logAnalyticsInfo"></a>

```go
func LogAnalyticsInfo() ClusterAzureAttributesLogAnalyticsInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference">ClusterAzureAttributesLogAnalyticsInfoOutputReference</a>

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.availabilityInput"></a>

```go
func AvailabilityInput() *string
```

- *Type:* *string

---

##### `FirstOnDemandInput`<sup>Optional</sup> <a name="FirstOnDemandInput" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.firstOnDemandInput"></a>

```go
func FirstOnDemandInput() *f64
```

- *Type:* *f64

---

##### `LogAnalyticsInfoInput`<sup>Optional</sup> <a name="LogAnalyticsInfoInput" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.logAnalyticsInfoInput"></a>

```go
func LogAnalyticsInfoInput() ClusterAzureAttributesLogAnalyticsInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo">ClusterAzureAttributesLogAnalyticsInfo</a>

---

##### `SpotBidMaxPriceInput`<sup>Optional</sup> <a name="SpotBidMaxPriceInput" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.spotBidMaxPriceInput"></a>

```go
func SpotBidMaxPriceInput() *f64
```

- *Type:* *f64

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.availability"></a>

```go
func Availability() *string
```

- *Type:* *string

---

##### `FirstOnDemand`<sup>Required</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.firstOnDemand"></a>

```go
func FirstOnDemand() *f64
```

- *Type:* *f64

---

##### `SpotBidMaxPrice`<sup>Required</sup> <a name="SpotBidMaxPrice" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.spotBidMaxPrice"></a>

```go
func SpotBidMaxPrice() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a>

---


### ClusterClusterLogConfDbfsOutputReference <a name="ClusterClusterLogConfDbfsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterClusterLogConfDbfsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterClusterLogConfDbfsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterClusterLogConfDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a>

---


### ClusterClusterLogConfOutputReference <a name="ClusterClusterLogConfOutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterClusterLogConfOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterClusterLogConfOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putDbfs">PutDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resetDbfs">ResetDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDbfs` <a name="PutDbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putDbfs"></a>

```go
func PutDbfs(value ClusterClusterLogConfDbfs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putDbfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a>

---

##### `PutS3` <a name="PutS3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putS3"></a>

```go
func PutS3(value ClusterClusterLogConfS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a>

---

##### `ResetDbfs` <a name="ResetDbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resetDbfs"></a>

```go
func ResetDbfs()
```

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resetS3"></a>

```go
func ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference">ClusterClusterLogConfDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference">ClusterClusterLogConfS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.dbfsInput">DbfsInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dbfs`<sup>Required</sup> <a name="Dbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.dbfs"></a>

```go
func Dbfs() ClusterClusterLogConfDbfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference">ClusterClusterLogConfDbfsOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.s3"></a>

```go
func S3() ClusterClusterLogConfS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference">ClusterClusterLogConfS3OutputReference</a>

---

##### `DbfsInput`<sup>Optional</sup> <a name="DbfsInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.dbfsInput"></a>

```go
func DbfsInput() ClusterClusterLogConfDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.s3Input"></a>

```go
func S3Input() ClusterClusterLogConfS3
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterClusterLogConf
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a>

---


### ClusterClusterLogConfS3OutputReference <a name="ClusterClusterLogConfS3OutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterClusterLogConfS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterClusterLogConfS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetCannedAcl">ResetCannedAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEnableEncryption">ResetEnableEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCannedAcl` <a name="ResetCannedAcl" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetCannedAcl"></a>

```go
func ResetCannedAcl()
```

##### `ResetEnableEncryption` <a name="ResetEnableEncryption" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEnableEncryption"></a>

```go
func ResetEnableEncryption()
```

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEncryptionType"></a>

```go
func ResetEncryptionType()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.cannedAclInput">CannedAclInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.enableEncryptionInput">EnableEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.cannedAcl">CannedAcl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.enableEncryption">EnableEncryption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CannedAclInput`<sup>Optional</sup> <a name="CannedAclInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.cannedAclInput"></a>

```go
func CannedAclInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `EnableEncryptionInput`<sup>Optional</sup> <a name="EnableEncryptionInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.enableEncryptionInput"></a>

```go
func EnableEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `CannedAcl`<sup>Required</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.cannedAcl"></a>

```go
func CannedAcl() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `EnableEncryption`<sup>Required</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.enableEncryption"></a>

```go
func EnableEncryption() interface{}
```

- *Type:* interface{}

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterClusterLogConfS3
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a>

---


### ClusterClusterMountInfoList <a name="ClusterClusterMountInfoList" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterClusterMountInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClusterClusterMountInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.get"></a>

```go
func Get(index *f64) ClusterClusterMountInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClusterClusterMountInfoNetworkFilesystemInfoOutputReference <a name="ClusterClusterMountInfoNetworkFilesystemInfoOutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterClusterMountInfoNetworkFilesystemInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterClusterMountInfoNetworkFilesystemInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resetMountOptions">ResetMountOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resetMountOptions"></a>

```go
func ResetMountOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.mountOptionsInput">MountOptionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.serverAddressInput">ServerAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.mountOptions">MountOptions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.serverAddress">ServerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.mountOptionsInput"></a>

```go
func MountOptionsInput() *string
```

- *Type:* *string

---

##### `ServerAddressInput`<sup>Optional</sup> <a name="ServerAddressInput" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.serverAddressInput"></a>

```go
func ServerAddressInput() *string
```

- *Type:* *string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.mountOptions"></a>

```go
func MountOptions() *string
```

- *Type:* *string

---

##### `ServerAddress`<sup>Required</sup> <a name="ServerAddress" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.serverAddress"></a>

```go
func ServerAddress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterClusterMountInfoNetworkFilesystemInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a>

---


### ClusterClusterMountInfoOutputReference <a name="ClusterClusterMountInfoOutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterClusterMountInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClusterClusterMountInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.putNetworkFilesystemInfo">PutNetworkFilesystemInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resetRemoteMountDirPath">ResetRemoteMountDirPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkFilesystemInfo` <a name="PutNetworkFilesystemInfo" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.putNetworkFilesystemInfo"></a>

```go
func PutNetworkFilesystemInfo(value ClusterClusterMountInfoNetworkFilesystemInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.putNetworkFilesystemInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a>

---

##### `ResetRemoteMountDirPath` <a name="ResetRemoteMountDirPath" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resetRemoteMountDirPath"></a>

```go
func ResetRemoteMountDirPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.networkFilesystemInfo">NetworkFilesystemInfo</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference">ClusterClusterMountInfoNetworkFilesystemInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.localMountDirPathInput">LocalMountDirPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.networkFilesystemInfoInput">NetworkFilesystemInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.remoteMountDirPathInput">RemoteMountDirPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.localMountDirPath">LocalMountDirPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.remoteMountDirPath">RemoteMountDirPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkFilesystemInfo`<sup>Required</sup> <a name="NetworkFilesystemInfo" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.networkFilesystemInfo"></a>

```go
func NetworkFilesystemInfo() ClusterClusterMountInfoNetworkFilesystemInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference">ClusterClusterMountInfoNetworkFilesystemInfoOutputReference</a>

---

##### `LocalMountDirPathInput`<sup>Optional</sup> <a name="LocalMountDirPathInput" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.localMountDirPathInput"></a>

```go
func LocalMountDirPathInput() *string
```

- *Type:* *string

---

##### `NetworkFilesystemInfoInput`<sup>Optional</sup> <a name="NetworkFilesystemInfoInput" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.networkFilesystemInfoInput"></a>

```go
func NetworkFilesystemInfoInput() ClusterClusterMountInfoNetworkFilesystemInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a>

---

##### `RemoteMountDirPathInput`<sup>Optional</sup> <a name="RemoteMountDirPathInput" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.remoteMountDirPathInput"></a>

```go
func RemoteMountDirPathInput() *string
```

- *Type:* *string

---

##### `LocalMountDirPath`<sup>Required</sup> <a name="LocalMountDirPath" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.localMountDirPath"></a>

```go
func LocalMountDirPath() *string
```

- *Type:* *string

---

##### `RemoteMountDirPath`<sup>Required</sup> <a name="RemoteMountDirPath" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.remoteMountDirPath"></a>

```go
func RemoteMountDirPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClusterDockerImageBasicAuthOutputReference <a name="ClusterDockerImageBasicAuthOutputReference" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterDockerImageBasicAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterDockerImageBasicAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterDockerImageBasicAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a>

---


### ClusterDockerImageOutputReference <a name="ClusterDockerImageOutputReference" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterDockerImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterDockerImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.putBasicAuth">PutBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resetBasicAuth">ResetBasicAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasicAuth` <a name="PutBasicAuth" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.putBasicAuth"></a>

```go
func PutBasicAuth(value ClusterDockerImageBasicAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.putBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a>

---

##### `ResetBasicAuth` <a name="ResetBasicAuth" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resetBasicAuth"></a>

```go
func ResetBasicAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.basicAuth">BasicAuth</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference">ClusterDockerImageBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.basicAuthInput">BasicAuthInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BasicAuth`<sup>Required</sup> <a name="BasicAuth" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.basicAuth"></a>

```go
func BasicAuth() ClusterDockerImageBasicAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference">ClusterDockerImageBasicAuthOutputReference</a>

---

##### `BasicAuthInput`<sup>Optional</sup> <a name="BasicAuthInput" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.basicAuthInput"></a>

```go
func BasicAuthInput() ClusterDockerImageBasicAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterDockerImage
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a>

---


### ClusterGcpAttributesOutputReference <a name="ClusterGcpAttributesOutputReference" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterGcpAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterGcpAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetBootDiskSize">ResetBootDiskSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetGoogleServiceAccount">ResetGoogleServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetLocalSsdCount">ResetLocalSsdCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetUsePreemptibleExecutors">ResetUsePreemptibleExecutors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetAvailability"></a>

```go
func ResetAvailability()
```

##### `ResetBootDiskSize` <a name="ResetBootDiskSize" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetBootDiskSize"></a>

```go
func ResetBootDiskSize()
```

##### `ResetGoogleServiceAccount` <a name="ResetGoogleServiceAccount" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetGoogleServiceAccount"></a>

```go
func ResetGoogleServiceAccount()
```

##### `ResetLocalSsdCount` <a name="ResetLocalSsdCount" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetLocalSsdCount"></a>

```go
func ResetLocalSsdCount()
```

##### `ResetUsePreemptibleExecutors` <a name="ResetUsePreemptibleExecutors" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetUsePreemptibleExecutors"></a>

```go
func ResetUsePreemptibleExecutors()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetZoneId"></a>

```go
func ResetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.bootDiskSizeInput">BootDiskSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.googleServiceAccountInput">GoogleServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.localSsdCountInput">LocalSsdCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.usePreemptibleExecutorsInput">UsePreemptibleExecutorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.availability">Availability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.bootDiskSize">BootDiskSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.googleServiceAccount">GoogleServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.localSsdCount">LocalSsdCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.usePreemptibleExecutors">UsePreemptibleExecutors</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.availabilityInput"></a>

```go
func AvailabilityInput() *string
```

- *Type:* *string

---

##### `BootDiskSizeInput`<sup>Optional</sup> <a name="BootDiskSizeInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.bootDiskSizeInput"></a>

```go
func BootDiskSizeInput() *f64
```

- *Type:* *f64

---

##### `GoogleServiceAccountInput`<sup>Optional</sup> <a name="GoogleServiceAccountInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.googleServiceAccountInput"></a>

```go
func GoogleServiceAccountInput() *string
```

- *Type:* *string

---

##### `LocalSsdCountInput`<sup>Optional</sup> <a name="LocalSsdCountInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.localSsdCountInput"></a>

```go
func LocalSsdCountInput() *f64
```

- *Type:* *f64

---

##### `UsePreemptibleExecutorsInput`<sup>Optional</sup> <a name="UsePreemptibleExecutorsInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.usePreemptibleExecutorsInput"></a>

```go
func UsePreemptibleExecutorsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.availability"></a>

```go
func Availability() *string
```

- *Type:* *string

---

##### `BootDiskSize`<sup>Required</sup> <a name="BootDiskSize" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.bootDiskSize"></a>

```go
func BootDiskSize() *f64
```

- *Type:* *f64

---

##### `GoogleServiceAccount`<sup>Required</sup> <a name="GoogleServiceAccount" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.googleServiceAccount"></a>

```go
func GoogleServiceAccount() *string
```

- *Type:* *string

---

##### `LocalSsdCount`<sup>Required</sup> <a name="LocalSsdCount" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.localSsdCount"></a>

```go
func LocalSsdCount() *f64
```

- *Type:* *f64

---

##### `UsePreemptibleExecutors`<sup>Required</sup> <a name="UsePreemptibleExecutors" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.usePreemptibleExecutors"></a>

```go
func UsePreemptibleExecutors() interface{}
```

- *Type:* interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a>

---


### ClusterInitScriptsAbfssOutputReference <a name="ClusterInitScriptsAbfssOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterInitScriptsAbfssOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterInitScriptsAbfssOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterInitScriptsAbfss
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a>

---


### ClusterInitScriptsDbfsOutputReference <a name="ClusterInitScriptsDbfsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterInitScriptsDbfsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterInitScriptsDbfsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterInitScriptsDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a>

---


### ClusterInitScriptsFileOutputReference <a name="ClusterInitScriptsFileOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterInitScriptsFileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterInitScriptsFileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterInitScriptsFile
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a>

---


### ClusterInitScriptsGcsOutputReference <a name="ClusterInitScriptsGcsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterInitScriptsGcsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterInitScriptsGcsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterInitScriptsGcs
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a>

---


### ClusterInitScriptsList <a name="ClusterInitScriptsList" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterInitScriptsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClusterInitScriptsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.get"></a>

```go
func Get(index *f64) ClusterInitScriptsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClusterInitScriptsOutputReference <a name="ClusterInitScriptsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterInitScriptsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClusterInitScriptsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putAbfss">PutAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putDbfs">PutDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putFile">PutFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putGcs">PutGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putWorkspace">PutWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetAbfss">ResetAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetDbfs">ResetDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetFile">ResetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetGcs">ResetGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetS3">ResetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetWorkspace">ResetWorkspace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbfss` <a name="PutAbfss" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putAbfss"></a>

```go
func PutAbfss(value ClusterInitScriptsAbfss)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putAbfss.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a>

---

##### `PutDbfs` <a name="PutDbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putDbfs"></a>

```go
func PutDbfs(value ClusterInitScriptsDbfs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putDbfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a>

---

##### `PutFile` <a name="PutFile" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putFile"></a>

```go
func PutFile(value ClusterInitScriptsFile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a>

---

##### `PutGcs` <a name="PutGcs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putGcs"></a>

```go
func PutGcs(value ClusterInitScriptsGcs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putGcs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a>

---

##### `PutS3` <a name="PutS3" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putS3"></a>

```go
func PutS3(value ClusterInitScriptsS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a>

---

##### `PutVolumes` <a name="PutVolumes" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putVolumes"></a>

```go
func PutVolumes(value ClusterInitScriptsVolumes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putVolumes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a>

---

##### `PutWorkspace` <a name="PutWorkspace" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putWorkspace"></a>

```go
func PutWorkspace(value ClusterInitScriptsWorkspace)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a>

---

##### `ResetAbfss` <a name="ResetAbfss" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetAbfss"></a>

```go
func ResetAbfss()
```

##### `ResetDbfs` <a name="ResetDbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetDbfs"></a>

```go
func ResetDbfs()
```

##### `ResetFile` <a name="ResetFile" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetFile"></a>

```go
func ResetFile()
```

##### `ResetGcs` <a name="ResetGcs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetGcs"></a>

```go
func ResetGcs()
```

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetS3"></a>

```go
func ResetS3()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetVolumes"></a>

```go
func ResetVolumes()
```

##### `ResetWorkspace` <a name="ResetWorkspace" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetWorkspace"></a>

```go
func ResetWorkspace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.abfss">Abfss</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference">ClusterInitScriptsAbfssOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference">ClusterInitScriptsDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.file">File</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference">ClusterInitScriptsFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.gcs">Gcs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference">ClusterInitScriptsGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference">ClusterInitScriptsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference">ClusterInitScriptsVolumesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.workspace">Workspace</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference">ClusterInitScriptsWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.abfssInput">AbfssInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.dbfsInput">DbfsInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.fileInput">FileInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.gcsInput">GcsInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.volumesInput">VolumesInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.workspaceInput">WorkspaceInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Abfss`<sup>Required</sup> <a name="Abfss" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.abfss"></a>

```go
func Abfss() ClusterInitScriptsAbfssOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference">ClusterInitScriptsAbfssOutputReference</a>

---

##### `Dbfs`<sup>Required</sup> <a name="Dbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.dbfs"></a>

```go
func Dbfs() ClusterInitScriptsDbfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference">ClusterInitScriptsDbfsOutputReference</a>

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.file"></a>

```go
func File() ClusterInitScriptsFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference">ClusterInitScriptsFileOutputReference</a>

---

##### `Gcs`<sup>Required</sup> <a name="Gcs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.gcs"></a>

```go
func Gcs() ClusterInitScriptsGcsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference">ClusterInitScriptsGcsOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.s3"></a>

```go
func S3() ClusterInitScriptsS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference">ClusterInitScriptsS3OutputReference</a>

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.volumes"></a>

```go
func Volumes() ClusterInitScriptsVolumesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference">ClusterInitScriptsVolumesOutputReference</a>

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.workspace"></a>

```go
func Workspace() ClusterInitScriptsWorkspaceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference">ClusterInitScriptsWorkspaceOutputReference</a>

---

##### `AbfssInput`<sup>Optional</sup> <a name="AbfssInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.abfssInput"></a>

```go
func AbfssInput() ClusterInitScriptsAbfss
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a>

---

##### `DbfsInput`<sup>Optional</sup> <a name="DbfsInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.dbfsInput"></a>

```go
func DbfsInput() ClusterInitScriptsDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a>

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.fileInput"></a>

```go
func FileInput() ClusterInitScriptsFile
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a>

---

##### `GcsInput`<sup>Optional</sup> <a name="GcsInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.gcsInput"></a>

```go
func GcsInput() ClusterInitScriptsGcs
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.s3Input"></a>

```go
func S3Input() ClusterInitScriptsS3
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a>

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.volumesInput"></a>

```go
func VolumesInput() ClusterInitScriptsVolumes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a>

---

##### `WorkspaceInput`<sup>Optional</sup> <a name="WorkspaceInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.workspaceInput"></a>

```go
func WorkspaceInput() ClusterInitScriptsWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClusterInitScriptsS3OutputReference <a name="ClusterInitScriptsS3OutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterInitScriptsS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterInitScriptsS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetCannedAcl">ResetCannedAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEnableEncryption">ResetEnableEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCannedAcl` <a name="ResetCannedAcl" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetCannedAcl"></a>

```go
func ResetCannedAcl()
```

##### `ResetEnableEncryption` <a name="ResetEnableEncryption" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEnableEncryption"></a>

```go
func ResetEnableEncryption()
```

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEncryptionType"></a>

```go
func ResetEncryptionType()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.cannedAclInput">CannedAclInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.enableEncryptionInput">EnableEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.cannedAcl">CannedAcl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.enableEncryption">EnableEncryption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CannedAclInput`<sup>Optional</sup> <a name="CannedAclInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.cannedAclInput"></a>

```go
func CannedAclInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `EnableEncryptionInput`<sup>Optional</sup> <a name="EnableEncryptionInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.enableEncryptionInput"></a>

```go
func EnableEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `CannedAcl`<sup>Required</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.cannedAcl"></a>

```go
func CannedAcl() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `EnableEncryption`<sup>Required</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.enableEncryption"></a>

```go
func EnableEncryption() interface{}
```

- *Type:* interface{}

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterInitScriptsS3
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a>

---


### ClusterInitScriptsVolumesOutputReference <a name="ClusterInitScriptsVolumesOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterInitScriptsVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterInitScriptsVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterInitScriptsVolumes
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a>

---


### ClusterInitScriptsWorkspaceOutputReference <a name="ClusterInitScriptsWorkspaceOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterInitScriptsWorkspaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterInitScriptsWorkspaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterInitScriptsWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a>

---


### ClusterLibraryCranOutputReference <a name="ClusterLibraryCranOutputReference" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterLibraryCranOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterLibraryCranOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRepo` <a name="ResetRepo" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resetRepo"></a>

```go
func ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.packageInput">PackageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.repoInput">RepoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.package">Package</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.repo">Repo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PackageInput`<sup>Optional</sup> <a name="PackageInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.packageInput"></a>

```go
func PackageInput() *string
```

- *Type:* *string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.repoInput"></a>

```go
func RepoInput() *string
```

- *Type:* *string

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.package"></a>

```go
func Package() *string
```

- *Type:* *string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.repo"></a>

```go
func Repo() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterLibraryCran
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a>

---


### ClusterLibraryList <a name="ClusterLibraryList" id="@cdktf/provider-databricks.cluster.ClusterLibraryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterLibraryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClusterLibraryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.get"></a>

```go
func Get(index *f64) ClusterLibraryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClusterLibraryMavenOutputReference <a name="ClusterLibraryMavenOutputReference" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterLibraryMavenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterLibraryMavenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resetExclusions"></a>

```go
func ResetExclusions()
```

##### `ResetRepo` <a name="ResetRepo" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resetRepo"></a>

```go
func ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.coordinatesInput">CoordinatesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.repoInput">RepoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.coordinates">Coordinates</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.repo">Repo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoordinatesInput`<sup>Optional</sup> <a name="CoordinatesInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.coordinatesInput"></a>

```go
func CoordinatesInput() *string
```

- *Type:* *string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.exclusionsInput"></a>

```go
func ExclusionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.repoInput"></a>

```go
func RepoInput() *string
```

- *Type:* *string

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.coordinates"></a>

```go
func Coordinates() *string
```

- *Type:* *string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.exclusions"></a>

```go
func Exclusions() *[]*string
```

- *Type:* *[]*string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.repo"></a>

```go
func Repo() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterLibraryMaven
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a>

---


### ClusterLibraryOutputReference <a name="ClusterLibraryOutputReference" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterLibraryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClusterLibraryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putCran">PutCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putMaven">PutMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putPypi">PutPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetCran">ResetCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetEgg">ResetEgg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetJar">ResetJar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetMaven">ResetMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetPypi">ResetPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetWhl">ResetWhl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCran` <a name="PutCran" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putCran"></a>

```go
func PutCran(value ClusterLibraryCran)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putCran.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a>

---

##### `PutMaven` <a name="PutMaven" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putMaven"></a>

```go
func PutMaven(value ClusterLibraryMaven)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putMaven.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a>

---

##### `PutPypi` <a name="PutPypi" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putPypi"></a>

```go
func PutPypi(value ClusterLibraryPypi)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putPypi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a>

---

##### `ResetCran` <a name="ResetCran" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetCran"></a>

```go
func ResetCran()
```

##### `ResetEgg` <a name="ResetEgg" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetEgg"></a>

```go
func ResetEgg()
```

##### `ResetJar` <a name="ResetJar" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetJar"></a>

```go
func ResetJar()
```

##### `ResetMaven` <a name="ResetMaven" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetMaven"></a>

```go
func ResetMaven()
```

##### `ResetPypi` <a name="ResetPypi" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetPypi"></a>

```go
func ResetPypi()
```

##### `ResetWhl` <a name="ResetWhl" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetWhl"></a>

```go
func ResetWhl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.cran">Cran</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference">ClusterLibraryCranOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.maven">Maven</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference">ClusterLibraryMavenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.pypi">Pypi</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference">ClusterLibraryPypiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.cranInput">CranInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.eggInput">EggInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.jarInput">JarInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.mavenInput">MavenInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.pypiInput">PypiInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.whlInput">WhlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.egg">Egg</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.jar">Jar</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.whl">Whl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cran`<sup>Required</sup> <a name="Cran" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.cran"></a>

```go
func Cran() ClusterLibraryCranOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference">ClusterLibraryCranOutputReference</a>

---

##### `Maven`<sup>Required</sup> <a name="Maven" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.maven"></a>

```go
func Maven() ClusterLibraryMavenOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference">ClusterLibraryMavenOutputReference</a>

---

##### `Pypi`<sup>Required</sup> <a name="Pypi" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.pypi"></a>

```go
func Pypi() ClusterLibraryPypiOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference">ClusterLibraryPypiOutputReference</a>

---

##### `CranInput`<sup>Optional</sup> <a name="CranInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.cranInput"></a>

```go
func CranInput() ClusterLibraryCran
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a>

---

##### `EggInput`<sup>Optional</sup> <a name="EggInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.eggInput"></a>

```go
func EggInput() *string
```

- *Type:* *string

---

##### `JarInput`<sup>Optional</sup> <a name="JarInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.jarInput"></a>

```go
func JarInput() *string
```

- *Type:* *string

---

##### `MavenInput`<sup>Optional</sup> <a name="MavenInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.mavenInput"></a>

```go
func MavenInput() ClusterLibraryMaven
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a>

---

##### `PypiInput`<sup>Optional</sup> <a name="PypiInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.pypiInput"></a>

```go
func PypiInput() ClusterLibraryPypi
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a>

---

##### `WhlInput`<sup>Optional</sup> <a name="WhlInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.whlInput"></a>

```go
func WhlInput() *string
```

- *Type:* *string

---

##### `Egg`<sup>Required</sup> <a name="Egg" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.egg"></a>

```go
func Egg() *string
```

- *Type:* *string

---

##### `Jar`<sup>Required</sup> <a name="Jar" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.jar"></a>

```go
func Jar() *string
```

- *Type:* *string

---

##### `Whl`<sup>Required</sup> <a name="Whl" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.whl"></a>

```go
func Whl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClusterLibraryPypiOutputReference <a name="ClusterLibraryPypiOutputReference" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterLibraryPypiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterLibraryPypiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRepo` <a name="ResetRepo" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resetRepo"></a>

```go
func ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.packageInput">PackageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.repoInput">RepoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.package">Package</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.repo">Repo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PackageInput`<sup>Optional</sup> <a name="PackageInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.packageInput"></a>

```go
func PackageInput() *string
```

- *Type:* *string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.repoInput"></a>

```go
func RepoInput() *string
```

- *Type:* *string

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.package"></a>

```go
func Package() *string
```

- *Type:* *string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.repo"></a>

```go
func Repo() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterLibraryPypi
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a>

---


### ClusterTimeoutsOutputReference <a name="ClusterTimeoutsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClusterWorkloadTypeClientsOutputReference <a name="ClusterWorkloadTypeClientsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterWorkloadTypeClientsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterWorkloadTypeClientsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resetJobs">ResetJobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resetNotebooks">ResetNotebooks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJobs` <a name="ResetJobs" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resetJobs"></a>

```go
func ResetJobs()
```

##### `ResetNotebooks` <a name="ResetNotebooks" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resetNotebooks"></a>

```go
func ResetNotebooks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.jobsInput">JobsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.notebooksInput">NotebooksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.jobs">Jobs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.notebooks">Notebooks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JobsInput`<sup>Optional</sup> <a name="JobsInput" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.jobsInput"></a>

```go
func JobsInput() interface{}
```

- *Type:* interface{}

---

##### `NotebooksInput`<sup>Optional</sup> <a name="NotebooksInput" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.notebooksInput"></a>

```go
func NotebooksInput() interface{}
```

- *Type:* interface{}

---

##### `Jobs`<sup>Required</sup> <a name="Jobs" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.jobs"></a>

```go
func Jobs() interface{}
```

- *Type:* interface{}

---

##### `Notebooks`<sup>Required</sup> <a name="Notebooks" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.notebooks"></a>

```go
func Notebooks() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterWorkloadTypeClients
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a>

---


### ClusterWorkloadTypeOutputReference <a name="ClusterWorkloadTypeOutputReference" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/cluster"

cluster.NewClusterWorkloadTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterWorkloadTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.putClients">PutClients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClients` <a name="PutClients" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.putClients"></a>

```go
func PutClients(value ClusterWorkloadTypeClients)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.putClients.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.clients">Clients</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference">ClusterWorkloadTypeClientsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.clientsInput">ClientsInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Clients`<sup>Required</sup> <a name="Clients" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.clients"></a>

```go
func Clients() ClusterWorkloadTypeClientsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference">ClusterWorkloadTypeClientsOutputReference</a>

---

##### `ClientsInput`<sup>Optional</sup> <a name="ClientsInput" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.clientsInput"></a>

```go
func ClientsInput() ClusterWorkloadTypeClients
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterWorkloadType
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a>

---



