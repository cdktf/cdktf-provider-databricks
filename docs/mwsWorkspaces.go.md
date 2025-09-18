# `mwsWorkspaces` Submodule <a name="`mwsWorkspaces` Submodule" id="@cdktf/provider-databricks.mwsWorkspaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsWorkspaces <a name="MwsWorkspaces" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces databricks_mws_workspaces}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/mwsworkspaces"

mwsworkspaces.NewMwsWorkspaces(scope Construct, id *string, config MwsWorkspacesConfig) MwsWorkspaces
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig">MwsWorkspacesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig">MwsWorkspacesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putCloudResourceContainer">PutCloudResourceContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putExternalCustomerInfo">PutExternalCustomerInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGcpManagedNetworkConfig">PutGcpManagedNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGkeConfig">PutGkeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putToken">PutToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetAwsRegion">ResetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCloud">ResetCloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCloudResourceContainer">ResetCloudResourceContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetComputeMode">ResetComputeMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCredentialsId">ResetCredentialsId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCustomerManagedKeyId">ResetCustomerManagedKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCustomTags">ResetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetDeploymentName">ResetDeploymentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetExternalCustomerInfo">ResetExternalCustomerInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetGcpManagedNetworkConfig">ResetGcpManagedNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetGkeConfig">ResetGkeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetIsNoPublicIpEnabled">ResetIsNoPublicIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetManagedServicesCustomerManagedKeyId">ResetManagedServicesCustomerManagedKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetNetworkId">ResetNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetPricingTier">ResetPricingTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetPrivateAccessSettingsId">ResetPrivateAccessSettingsId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetStorageConfigurationId">ResetStorageConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetStorageCustomerManagedKeyId">ResetStorageCustomerManagedKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceStatus">ResetWorkspaceStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceStatusMessage">ResetWorkspaceStatusMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceUrl">ResetWorkspaceUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudResourceContainer` <a name="PutCloudResourceContainer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putCloudResourceContainer"></a>

```go
func PutCloudResourceContainer(value MwsWorkspacesCloudResourceContainer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putCloudResourceContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a>

---

##### `PutExternalCustomerInfo` <a name="PutExternalCustomerInfo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putExternalCustomerInfo"></a>

```go
func PutExternalCustomerInfo(value MwsWorkspacesExternalCustomerInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putExternalCustomerInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a>

---

##### `PutGcpManagedNetworkConfig` <a name="PutGcpManagedNetworkConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGcpManagedNetworkConfig"></a>

```go
func PutGcpManagedNetworkConfig(value MwsWorkspacesGcpManagedNetworkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGcpManagedNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a>

---

##### `PutGkeConfig` <a name="PutGkeConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGkeConfig"></a>

```go
func PutGkeConfig(value MwsWorkspacesGkeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGkeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putTimeouts"></a>

```go
func PutTimeouts(value MwsWorkspacesTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a>

---

##### `PutToken` <a name="PutToken" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putToken"></a>

```go
func PutToken(value MwsWorkspacesToken)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a>

---

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetAwsRegion"></a>

```go
func ResetAwsRegion()
```

##### `ResetCloud` <a name="ResetCloud" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCloud"></a>

```go
func ResetCloud()
```

##### `ResetCloudResourceContainer` <a name="ResetCloudResourceContainer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCloudResourceContainer"></a>

```go
func ResetCloudResourceContainer()
```

##### `ResetComputeMode` <a name="ResetComputeMode" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetComputeMode"></a>

```go
func ResetComputeMode()
```

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCreationTime"></a>

```go
func ResetCreationTime()
```

##### `ResetCredentialsId` <a name="ResetCredentialsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCredentialsId"></a>

```go
func ResetCredentialsId()
```

##### `ResetCustomerManagedKeyId` <a name="ResetCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCustomerManagedKeyId"></a>

```go
func ResetCustomerManagedKeyId()
```

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCustomTags"></a>

```go
func ResetCustomTags()
```

##### `ResetDeploymentName` <a name="ResetDeploymentName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetDeploymentName"></a>

```go
func ResetDeploymentName()
```

##### `ResetExternalCustomerInfo` <a name="ResetExternalCustomerInfo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetExternalCustomerInfo"></a>

```go
func ResetExternalCustomerInfo()
```

##### `ResetGcpManagedNetworkConfig` <a name="ResetGcpManagedNetworkConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetGcpManagedNetworkConfig"></a>

```go
func ResetGcpManagedNetworkConfig()
```

##### `ResetGkeConfig` <a name="ResetGkeConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetGkeConfig"></a>

```go
func ResetGkeConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetId"></a>

```go
func ResetId()
```

##### `ResetIsNoPublicIpEnabled` <a name="ResetIsNoPublicIpEnabled" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetIsNoPublicIpEnabled"></a>

```go
func ResetIsNoPublicIpEnabled()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetManagedServicesCustomerManagedKeyId` <a name="ResetManagedServicesCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetManagedServicesCustomerManagedKeyId"></a>

```go
func ResetManagedServicesCustomerManagedKeyId()
```

##### `ResetNetworkId` <a name="ResetNetworkId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetNetworkId"></a>

```go
func ResetNetworkId()
```

##### `ResetPricingTier` <a name="ResetPricingTier" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetPricingTier"></a>

```go
func ResetPricingTier()
```

##### `ResetPrivateAccessSettingsId` <a name="ResetPrivateAccessSettingsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetPrivateAccessSettingsId"></a>

```go
func ResetPrivateAccessSettingsId()
```

##### `ResetStorageConfigurationId` <a name="ResetStorageConfigurationId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetStorageConfigurationId"></a>

```go
func ResetStorageConfigurationId()
```

##### `ResetStorageCustomerManagedKeyId` <a name="ResetStorageCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetStorageCustomerManagedKeyId"></a>

```go
func ResetStorageCustomerManagedKeyId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetToken"></a>

```go
func ResetToken()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```

##### `ResetWorkspaceStatus` <a name="ResetWorkspaceStatus" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceStatus"></a>

```go
func ResetWorkspaceStatus()
```

##### `ResetWorkspaceStatusMessage` <a name="ResetWorkspaceStatusMessage" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceStatusMessage"></a>

```go
func ResetWorkspaceStatusMessage()
```

##### `ResetWorkspaceUrl` <a name="ResetWorkspaceUrl" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceUrl"></a>

```go
func ResetWorkspaceUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MwsWorkspaces resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/mwsworkspaces"

mwsworkspaces.MwsWorkspaces_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/mwsworkspaces"

mwsworkspaces.MwsWorkspaces_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/mwsworkspaces"

mwsworkspaces.MwsWorkspaces_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/mwsworkspaces"

mwsworkspaces.MwsWorkspaces_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MwsWorkspaces resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MwsWorkspaces to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MwsWorkspaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MwsWorkspaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudResourceContainer">CloudResourceContainer</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference">MwsWorkspacesCloudResourceContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.effectiveComputeMode">EffectiveComputeMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.externalCustomerInfo">ExternalCustomerInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference">MwsWorkspacesExternalCustomerInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpManagedNetworkConfig">GcpManagedNetworkConfig</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference">MwsWorkspacesGcpManagedNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpWorkspaceSa">GcpWorkspaceSa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gkeConfig">GkeConfig</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference">MwsWorkspacesGkeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference">MwsWorkspacesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.token">Token</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference">MwsWorkspacesTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.awsRegionInput">AwsRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudInput">CloudInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudResourceContainerInput">CloudResourceContainerInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.computeModeInput">ComputeModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.creationTimeInput">CreationTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.credentialsIdInput">CredentialsIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customerManagedKeyIdInput">CustomerManagedKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customTagsInput">CustomTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.deploymentNameInput">DeploymentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.externalCustomerInfoInput">ExternalCustomerInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpManagedNetworkConfigInput">GcpManagedNetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gkeConfigInput">GkeConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.isNoPublicIpEnabledInput">IsNoPublicIpEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.managedServicesCustomerManagedKeyIdInput">ManagedServicesCustomerManagedKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.networkIdInput">NetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.pricingTierInput">PricingTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.privateAccessSettingsIdInput">PrivateAccessSettingsIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageConfigurationIdInput">StorageConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageCustomerManagedKeyIdInput">StorageCustomerManagedKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.tokenInput">TokenInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceNameInput">WorkspaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusInput">WorkspaceStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusMessageInput">WorkspaceStatusMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceUrlInput">WorkspaceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloud">Cloud</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.computeMode">ComputeMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.creationTime">CreationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.credentialsId">CredentialsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customerManagedKeyId">CustomerManagedKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customTags">CustomTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.deploymentName">DeploymentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.isNoPublicIpEnabled">IsNoPublicIpEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.managedServicesCustomerManagedKeyId">ManagedServicesCustomerManagedKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.networkId">NetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.pricingTier">PricingTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.privateAccessSettingsId">PrivateAccessSettingsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageConfigurationId">StorageConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageCustomerManagedKeyId">StorageCustomerManagedKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceId">WorkspaceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceName">WorkspaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatus">WorkspaceStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusMessage">WorkspaceStatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceUrl">WorkspaceUrl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudResourceContainer`<sup>Required</sup> <a name="CloudResourceContainer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudResourceContainer"></a>

```go
func CloudResourceContainer() MwsWorkspacesCloudResourceContainerOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference">MwsWorkspacesCloudResourceContainerOutputReference</a>

---

##### `EffectiveComputeMode`<sup>Required</sup> <a name="EffectiveComputeMode" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.effectiveComputeMode"></a>

```go
func EffectiveComputeMode() *string
```

- *Type:* *string

---

##### `ExternalCustomerInfo`<sup>Required</sup> <a name="ExternalCustomerInfo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.externalCustomerInfo"></a>

```go
func ExternalCustomerInfo() MwsWorkspacesExternalCustomerInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference">MwsWorkspacesExternalCustomerInfoOutputReference</a>

---

##### `GcpManagedNetworkConfig`<sup>Required</sup> <a name="GcpManagedNetworkConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpManagedNetworkConfig"></a>

```go
func GcpManagedNetworkConfig() MwsWorkspacesGcpManagedNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference">MwsWorkspacesGcpManagedNetworkConfigOutputReference</a>

---

##### `GcpWorkspaceSa`<sup>Required</sup> <a name="GcpWorkspaceSa" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpWorkspaceSa"></a>

```go
func GcpWorkspaceSa() *string
```

- *Type:* *string

---

##### `GkeConfig`<sup>Required</sup> <a name="GkeConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gkeConfig"></a>

```go
func GkeConfig() MwsWorkspacesGkeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference">MwsWorkspacesGkeConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.timeouts"></a>

```go
func Timeouts() MwsWorkspacesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference">MwsWorkspacesTimeoutsOutputReference</a>

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.token"></a>

```go
func Token() MwsWorkspacesTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference">MwsWorkspacesTokenOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.awsRegionInput"></a>

```go
func AwsRegionInput() *string
```

- *Type:* *string

---

##### `CloudInput`<sup>Optional</sup> <a name="CloudInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudInput"></a>

```go
func CloudInput() *string
```

- *Type:* *string

---

##### `CloudResourceContainerInput`<sup>Optional</sup> <a name="CloudResourceContainerInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudResourceContainerInput"></a>

```go
func CloudResourceContainerInput() MwsWorkspacesCloudResourceContainer
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a>

---

##### `ComputeModeInput`<sup>Optional</sup> <a name="ComputeModeInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.computeModeInput"></a>

```go
func ComputeModeInput() *string
```

- *Type:* *string

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.creationTimeInput"></a>

```go
func CreationTimeInput() *f64
```

- *Type:* *f64

---

##### `CredentialsIdInput`<sup>Optional</sup> <a name="CredentialsIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.credentialsIdInput"></a>

```go
func CredentialsIdInput() *string
```

- *Type:* *string

---

##### `CustomerManagedKeyIdInput`<sup>Optional</sup> <a name="CustomerManagedKeyIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customerManagedKeyIdInput"></a>

```go
func CustomerManagedKeyIdInput() *string
```

- *Type:* *string

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customTagsInput"></a>

```go
func CustomTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeploymentNameInput`<sup>Optional</sup> <a name="DeploymentNameInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.deploymentNameInput"></a>

```go
func DeploymentNameInput() *string
```

- *Type:* *string

---

##### `ExternalCustomerInfoInput`<sup>Optional</sup> <a name="ExternalCustomerInfoInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.externalCustomerInfoInput"></a>

```go
func ExternalCustomerInfoInput() MwsWorkspacesExternalCustomerInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a>

---

##### `GcpManagedNetworkConfigInput`<sup>Optional</sup> <a name="GcpManagedNetworkConfigInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpManagedNetworkConfigInput"></a>

```go
func GcpManagedNetworkConfigInput() MwsWorkspacesGcpManagedNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a>

---

##### `GkeConfigInput`<sup>Optional</sup> <a name="GkeConfigInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gkeConfigInput"></a>

```go
func GkeConfigInput() MwsWorkspacesGkeConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsNoPublicIpEnabledInput`<sup>Optional</sup> <a name="IsNoPublicIpEnabledInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.isNoPublicIpEnabledInput"></a>

```go
func IsNoPublicIpEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ManagedServicesCustomerManagedKeyIdInput`<sup>Optional</sup> <a name="ManagedServicesCustomerManagedKeyIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.managedServicesCustomerManagedKeyIdInput"></a>

```go
func ManagedServicesCustomerManagedKeyIdInput() *string
```

- *Type:* *string

---

##### `NetworkIdInput`<sup>Optional</sup> <a name="NetworkIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.networkIdInput"></a>

```go
func NetworkIdInput() *string
```

- *Type:* *string

---

##### `PricingTierInput`<sup>Optional</sup> <a name="PricingTierInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.pricingTierInput"></a>

```go
func PricingTierInput() *string
```

- *Type:* *string

---

##### `PrivateAccessSettingsIdInput`<sup>Optional</sup> <a name="PrivateAccessSettingsIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.privateAccessSettingsIdInput"></a>

```go
func PrivateAccessSettingsIdInput() *string
```

- *Type:* *string

---

##### `StorageConfigurationIdInput`<sup>Optional</sup> <a name="StorageConfigurationIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageConfigurationIdInput"></a>

```go
func StorageConfigurationIdInput() *string
```

- *Type:* *string

---

##### `StorageCustomerManagedKeyIdInput`<sup>Optional</sup> <a name="StorageCustomerManagedKeyIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageCustomerManagedKeyIdInput"></a>

```go
func StorageCustomerManagedKeyIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.tokenInput"></a>

```go
func TokenInput() MwsWorkspacesToken
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a>

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *f64
```

- *Type:* *f64

---

##### `WorkspaceNameInput`<sup>Optional</sup> <a name="WorkspaceNameInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceNameInput"></a>

```go
func WorkspaceNameInput() *string
```

- *Type:* *string

---

##### `WorkspaceStatusInput`<sup>Optional</sup> <a name="WorkspaceStatusInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusInput"></a>

```go
func WorkspaceStatusInput() *string
```

- *Type:* *string

---

##### `WorkspaceStatusMessageInput`<sup>Optional</sup> <a name="WorkspaceStatusMessageInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusMessageInput"></a>

```go
func WorkspaceStatusMessageInput() *string
```

- *Type:* *string

---

##### `WorkspaceUrlInput`<sup>Optional</sup> <a name="WorkspaceUrlInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceUrlInput"></a>

```go
func WorkspaceUrlInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.awsRegion"></a>

```go
func AwsRegion() *string
```

- *Type:* *string

---

##### `Cloud`<sup>Required</sup> <a name="Cloud" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloud"></a>

```go
func Cloud() *string
```

- *Type:* *string

---

##### `ComputeMode`<sup>Required</sup> <a name="ComputeMode" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.computeMode"></a>

```go
func ComputeMode() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.creationTime"></a>

```go
func CreationTime() *f64
```

- *Type:* *f64

---

##### `CredentialsId`<sup>Required</sup> <a name="CredentialsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.credentialsId"></a>

```go
func CredentialsId() *string
```

- *Type:* *string

---

##### `CustomerManagedKeyId`<sup>Required</sup> <a name="CustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customerManagedKeyId"></a>

```go
func CustomerManagedKeyId() *string
```

- *Type:* *string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customTags"></a>

```go
func CustomTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeploymentName`<sup>Required</sup> <a name="DeploymentName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.deploymentName"></a>

```go
func DeploymentName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsNoPublicIpEnabled`<sup>Required</sup> <a name="IsNoPublicIpEnabled" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.isNoPublicIpEnabled"></a>

```go
func IsNoPublicIpEnabled() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ManagedServicesCustomerManagedKeyId`<sup>Required</sup> <a name="ManagedServicesCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.managedServicesCustomerManagedKeyId"></a>

```go
func ManagedServicesCustomerManagedKeyId() *string
```

- *Type:* *string

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.networkId"></a>

```go
func NetworkId() *string
```

- *Type:* *string

---

##### `PricingTier`<sup>Required</sup> <a name="PricingTier" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.pricingTier"></a>

```go
func PricingTier() *string
```

- *Type:* *string

---

##### `PrivateAccessSettingsId`<sup>Required</sup> <a name="PrivateAccessSettingsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.privateAccessSettingsId"></a>

```go
func PrivateAccessSettingsId() *string
```

- *Type:* *string

---

##### `StorageConfigurationId`<sup>Required</sup> <a name="StorageConfigurationId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageConfigurationId"></a>

```go
func StorageConfigurationId() *string
```

- *Type:* *string

---

##### `StorageCustomerManagedKeyId`<sup>Required</sup> <a name="StorageCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageCustomerManagedKeyId"></a>

```go
func StorageCustomerManagedKeyId() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceId"></a>

```go
func WorkspaceId() *f64
```

- *Type:* *f64

---

##### `WorkspaceName`<sup>Required</sup> <a name="WorkspaceName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceName"></a>

```go
func WorkspaceName() *string
```

- *Type:* *string

---

##### `WorkspaceStatus`<sup>Required</sup> <a name="WorkspaceStatus" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatus"></a>

```go
func WorkspaceStatus() *string
```

- *Type:* *string

---

##### `WorkspaceStatusMessage`<sup>Required</sup> <a name="WorkspaceStatusMessage" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusMessage"></a>

```go
func WorkspaceStatusMessage() *string
```

- *Type:* *string

---

##### `WorkspaceUrl`<sup>Required</sup> <a name="WorkspaceUrl" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceUrl"></a>

```go
func WorkspaceUrl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsWorkspacesCloudResourceContainer <a name="MwsWorkspacesCloudResourceContainer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/mwsworkspaces"

&mwsworkspaces.MwsWorkspacesCloudResourceContainer {
	Gcp: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer.property.gcp">Gcp</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a></code> | gcp block. |

---

##### `Gcp`<sup>Required</sup> <a name="Gcp" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer.property.gcp"></a>

```go
Gcp MwsWorkspacesCloudResourceContainerGcp
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a>

gcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#gcp MwsWorkspaces#gcp}

---

### MwsWorkspacesCloudResourceContainerGcp <a name="MwsWorkspacesCloudResourceContainerGcp" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/mwsworkspaces"

&mwsworkspaces.MwsWorkspacesCloudResourceContainerGcp {
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#project_id MwsWorkspaces#project_id}. |

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#project_id MwsWorkspaces#project_id}.

---

### MwsWorkspacesConfig <a name="MwsWorkspacesConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/mwsworkspaces"

&mwsworkspaces.MwsWorkspacesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	WorkspaceName: *string,
	AwsRegion: *string,
	Cloud: *string,
	CloudResourceContainer: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.mwsWorkspaces.MwsWorkspacesCloudResourceContainer,
	ComputeMode: *string,
	CreationTime: *f64,
	CredentialsId: *string,
	CustomerManagedKeyId: *string,
	CustomTags: *map[string]*string,
	DeploymentName: *string,
	ExternalCustomerInfo: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo,
	GcpManagedNetworkConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig,
	GkeConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.mwsWorkspaces.MwsWorkspacesGkeConfig,
	Id: *string,
	IsNoPublicIpEnabled: interface{},
	Location: *string,
	ManagedServicesCustomerManagedKeyId: *string,
	NetworkId: *string,
	PricingTier: *string,
	PrivateAccessSettingsId: *string,
	StorageConfigurationId: *string,
	StorageCustomerManagedKeyId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.mwsWorkspaces.MwsWorkspacesTimeouts,
	Token: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.mwsWorkspaces.MwsWorkspacesToken,
	WorkspaceId: *f64,
	WorkspaceStatus: *string,
	WorkspaceStatusMessage: *string,
	WorkspaceUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#account_id MwsWorkspaces#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceName">WorkspaceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#workspace_name MwsWorkspaces#workspace_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#aws_region MwsWorkspaces#aws_region}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.cloud">Cloud</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#cloud MwsWorkspaces#cloud}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.cloudResourceContainer">CloudResourceContainer</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a></code> | cloud_resource_container block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.computeMode">ComputeMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#compute_mode MwsWorkspaces#compute_mode}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.creationTime">CreationTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#creation_time MwsWorkspaces#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.credentialsId">CredentialsId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#credentials_id MwsWorkspaces#credentials_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.customerManagedKeyId">CustomerManagedKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#customer_managed_key_id MwsWorkspaces#customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.customTags">CustomTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#custom_tags MwsWorkspaces#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.deploymentName">DeploymentName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#deployment_name MwsWorkspaces#deployment_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.externalCustomerInfo">ExternalCustomerInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a></code> | external_customer_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.gcpManagedNetworkConfig">GcpManagedNetworkConfig</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a></code> | gcp_managed_network_config block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.gkeConfig">GkeConfig</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a></code> | gke_config block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#id MwsWorkspaces#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.isNoPublicIpEnabled">IsNoPublicIpEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#is_no_public_ip_enabled MwsWorkspaces#is_no_public_ip_enabled}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#location MwsWorkspaces#location}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.managedServicesCustomerManagedKeyId">ManagedServicesCustomerManagedKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#managed_services_customer_managed_key_id MwsWorkspaces#managed_services_customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.networkId">NetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#network_id MwsWorkspaces#network_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.pricingTier">PricingTier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#pricing_tier MwsWorkspaces#pricing_tier}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.privateAccessSettingsId">PrivateAccessSettingsId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#private_access_settings_id MwsWorkspaces#private_access_settings_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.storageConfigurationId">StorageConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#storage_configuration_id MwsWorkspaces#storage_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.storageCustomerManagedKeyId">StorageCustomerManagedKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#storage_customer_managed_key_id MwsWorkspaces#storage_customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.token">Token</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a></code> | token block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceId">WorkspaceId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#workspace_id MwsWorkspaces#workspace_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceStatus">WorkspaceStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#workspace_status MwsWorkspaces#workspace_status}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceStatusMessage">WorkspaceStatusMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#workspace_status_message MwsWorkspaces#workspace_status_message}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceUrl">WorkspaceUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#workspace_url MwsWorkspaces#workspace_url}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#account_id MwsWorkspaces#account_id}.

---

##### `WorkspaceName`<sup>Required</sup> <a name="WorkspaceName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceName"></a>

```go
WorkspaceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#workspace_name MwsWorkspaces#workspace_name}.

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.awsRegion"></a>

```go
AwsRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#aws_region MwsWorkspaces#aws_region}.

---

##### `Cloud`<sup>Optional</sup> <a name="Cloud" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.cloud"></a>

```go
Cloud *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#cloud MwsWorkspaces#cloud}.

---

##### `CloudResourceContainer`<sup>Optional</sup> <a name="CloudResourceContainer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.cloudResourceContainer"></a>

```go
CloudResourceContainer MwsWorkspacesCloudResourceContainer
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a>

cloud_resource_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#cloud_resource_container MwsWorkspaces#cloud_resource_container}

---

##### `ComputeMode`<sup>Optional</sup> <a name="ComputeMode" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.computeMode"></a>

```go
ComputeMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#compute_mode MwsWorkspaces#compute_mode}.

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.creationTime"></a>

```go
CreationTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#creation_time MwsWorkspaces#creation_time}.

---

##### `CredentialsId`<sup>Optional</sup> <a name="CredentialsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.credentialsId"></a>

```go
CredentialsId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#credentials_id MwsWorkspaces#credentials_id}.

---

##### `CustomerManagedKeyId`<sup>Optional</sup> <a name="CustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.customerManagedKeyId"></a>

```go
CustomerManagedKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#customer_managed_key_id MwsWorkspaces#customer_managed_key_id}.

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.customTags"></a>

```go
CustomTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#custom_tags MwsWorkspaces#custom_tags}.

---

##### `DeploymentName`<sup>Optional</sup> <a name="DeploymentName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.deploymentName"></a>

```go
DeploymentName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#deployment_name MwsWorkspaces#deployment_name}.

---

##### `ExternalCustomerInfo`<sup>Optional</sup> <a name="ExternalCustomerInfo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.externalCustomerInfo"></a>

```go
ExternalCustomerInfo MwsWorkspacesExternalCustomerInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a>

external_customer_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#external_customer_info MwsWorkspaces#external_customer_info}

---

##### `GcpManagedNetworkConfig`<sup>Optional</sup> <a name="GcpManagedNetworkConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.gcpManagedNetworkConfig"></a>

```go
GcpManagedNetworkConfig MwsWorkspacesGcpManagedNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a>

gcp_managed_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#gcp_managed_network_config MwsWorkspaces#gcp_managed_network_config}

---

##### `GkeConfig`<sup>Optional</sup> <a name="GkeConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.gkeConfig"></a>

```go
GkeConfig MwsWorkspacesGkeConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a>

gke_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#gke_config MwsWorkspaces#gke_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#id MwsWorkspaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsNoPublicIpEnabled`<sup>Optional</sup> <a name="IsNoPublicIpEnabled" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.isNoPublicIpEnabled"></a>

```go
IsNoPublicIpEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#is_no_public_ip_enabled MwsWorkspaces#is_no_public_ip_enabled}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#location MwsWorkspaces#location}.

---

##### `ManagedServicesCustomerManagedKeyId`<sup>Optional</sup> <a name="ManagedServicesCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.managedServicesCustomerManagedKeyId"></a>

```go
ManagedServicesCustomerManagedKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#managed_services_customer_managed_key_id MwsWorkspaces#managed_services_customer_managed_key_id}.

---

##### `NetworkId`<sup>Optional</sup> <a name="NetworkId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.networkId"></a>

```go
NetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#network_id MwsWorkspaces#network_id}.

---

##### `PricingTier`<sup>Optional</sup> <a name="PricingTier" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.pricingTier"></a>

```go
PricingTier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#pricing_tier MwsWorkspaces#pricing_tier}.

---

##### `PrivateAccessSettingsId`<sup>Optional</sup> <a name="PrivateAccessSettingsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.privateAccessSettingsId"></a>

```go
PrivateAccessSettingsId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#private_access_settings_id MwsWorkspaces#private_access_settings_id}.

---

##### `StorageConfigurationId`<sup>Optional</sup> <a name="StorageConfigurationId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.storageConfigurationId"></a>

```go
StorageConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#storage_configuration_id MwsWorkspaces#storage_configuration_id}.

---

##### `StorageCustomerManagedKeyId`<sup>Optional</sup> <a name="StorageCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.storageCustomerManagedKeyId"></a>

```go
StorageCustomerManagedKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#storage_customer_managed_key_id MwsWorkspaces#storage_customer_managed_key_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.timeouts"></a>

```go
Timeouts MwsWorkspacesTimeouts
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#timeouts MwsWorkspaces#timeouts}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.token"></a>

```go
Token MwsWorkspacesToken
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a>

token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#token MwsWorkspaces#token}

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceId"></a>

```go
WorkspaceId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#workspace_id MwsWorkspaces#workspace_id}.

---

##### `WorkspaceStatus`<sup>Optional</sup> <a name="WorkspaceStatus" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceStatus"></a>

```go
WorkspaceStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#workspace_status MwsWorkspaces#workspace_status}.

---

##### `WorkspaceStatusMessage`<sup>Optional</sup> <a name="WorkspaceStatusMessage" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceStatusMessage"></a>

```go
WorkspaceStatusMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#workspace_status_message MwsWorkspaces#workspace_status_message}.

---

##### `WorkspaceUrl`<sup>Optional</sup> <a name="WorkspaceUrl" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceUrl"></a>

```go
WorkspaceUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#workspace_url MwsWorkspaces#workspace_url}.

---

### MwsWorkspacesExternalCustomerInfo <a name="MwsWorkspacesExternalCustomerInfo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/mwsworkspaces"

&mwsworkspaces.MwsWorkspacesExternalCustomerInfo {
	AuthoritativeUserEmail: *string,
	AuthoritativeUserFullName: *string,
	CustomerName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.authoritativeUserEmail">AuthoritativeUserEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#authoritative_user_email MwsWorkspaces#authoritative_user_email}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.authoritativeUserFullName">AuthoritativeUserFullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#authoritative_user_full_name MwsWorkspaces#authoritative_user_full_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.customerName">CustomerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#customer_name MwsWorkspaces#customer_name}. |

---

##### `AuthoritativeUserEmail`<sup>Required</sup> <a name="AuthoritativeUserEmail" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.authoritativeUserEmail"></a>

```go
AuthoritativeUserEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#authoritative_user_email MwsWorkspaces#authoritative_user_email}.

---

##### `AuthoritativeUserFullName`<sup>Required</sup> <a name="AuthoritativeUserFullName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.authoritativeUserFullName"></a>

```go
AuthoritativeUserFullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#authoritative_user_full_name MwsWorkspaces#authoritative_user_full_name}.

---

##### `CustomerName`<sup>Required</sup> <a name="CustomerName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.customerName"></a>

```go
CustomerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#customer_name MwsWorkspaces#customer_name}.

---

### MwsWorkspacesGcpManagedNetworkConfig <a name="MwsWorkspacesGcpManagedNetworkConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/mwsworkspaces"

&mwsworkspaces.MwsWorkspacesGcpManagedNetworkConfig {
	SubnetCidr: *string,
	GkeClusterPodIpRange: *string,
	GkeClusterServiceIpRange: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.subnetCidr">SubnetCidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#subnet_cidr MwsWorkspaces#subnet_cidr}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.gkeClusterPodIpRange">GkeClusterPodIpRange</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#gke_cluster_pod_ip_range MwsWorkspaces#gke_cluster_pod_ip_range}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.gkeClusterServiceIpRange">GkeClusterServiceIpRange</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#gke_cluster_service_ip_range MwsWorkspaces#gke_cluster_service_ip_range}. |

---

##### `SubnetCidr`<sup>Required</sup> <a name="SubnetCidr" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.subnetCidr"></a>

```go
SubnetCidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#subnet_cidr MwsWorkspaces#subnet_cidr}.

---

##### `GkeClusterPodIpRange`<sup>Optional</sup> <a name="GkeClusterPodIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.gkeClusterPodIpRange"></a>

```go
GkeClusterPodIpRange *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#gke_cluster_pod_ip_range MwsWorkspaces#gke_cluster_pod_ip_range}.

---

##### `GkeClusterServiceIpRange`<sup>Optional</sup> <a name="GkeClusterServiceIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.gkeClusterServiceIpRange"></a>

```go
GkeClusterServiceIpRange *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#gke_cluster_service_ip_range MwsWorkspaces#gke_cluster_service_ip_range}.

---

### MwsWorkspacesGkeConfig <a name="MwsWorkspacesGkeConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/mwsworkspaces"

&mwsworkspaces.MwsWorkspacesGkeConfig {
	ConnectivityType: *string,
	MasterIpRange: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.property.connectivityType">ConnectivityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#connectivity_type MwsWorkspaces#connectivity_type}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.property.masterIpRange">MasterIpRange</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#master_ip_range MwsWorkspaces#master_ip_range}. |

---

##### `ConnectivityType`<sup>Optional</sup> <a name="ConnectivityType" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.property.connectivityType"></a>

```go
ConnectivityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#connectivity_type MwsWorkspaces#connectivity_type}.

---

##### `MasterIpRange`<sup>Optional</sup> <a name="MasterIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.property.masterIpRange"></a>

```go
MasterIpRange *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#master_ip_range MwsWorkspaces#master_ip_range}.

---

### MwsWorkspacesTimeouts <a name="MwsWorkspacesTimeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/mwsworkspaces"

&mwsworkspaces.MwsWorkspacesTimeouts {
	Create: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#create MwsWorkspaces#create}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#read MwsWorkspaces#read}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#update MwsWorkspaces#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#create MwsWorkspaces#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#read MwsWorkspaces#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#update MwsWorkspaces#update}.

---

### MwsWorkspacesToken <a name="MwsWorkspacesToken" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/mwsworkspaces"

&mwsworkspaces.MwsWorkspacesToken {
	Comment: *string,
	LifetimeSeconds: *f64,
	TokenId: *string,
	TokenValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#comment MwsWorkspaces#comment}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.lifetimeSeconds">LifetimeSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#lifetime_seconds MwsWorkspaces#lifetime_seconds}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.tokenId">TokenId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#token_id MwsWorkspaces#token_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.tokenValue">TokenValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#token_value MwsWorkspaces#token_value}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#comment MwsWorkspaces#comment}.

---

##### `LifetimeSeconds`<sup>Optional</sup> <a name="LifetimeSeconds" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.lifetimeSeconds"></a>

```go
LifetimeSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#lifetime_seconds MwsWorkspaces#lifetime_seconds}.

---

##### `TokenId`<sup>Optional</sup> <a name="TokenId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.tokenId"></a>

```go
TokenId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#token_id MwsWorkspaces#token_id}.

---

##### `TokenValue`<sup>Optional</sup> <a name="TokenValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.tokenValue"></a>

```go
TokenValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/mws_workspaces#token_value MwsWorkspaces#token_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwsWorkspacesCloudResourceContainerGcpOutputReference <a name="MwsWorkspacesCloudResourceContainerGcpOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/mwsworkspaces"

mwsworkspaces.NewMwsWorkspacesCloudResourceContainerGcpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwsWorkspacesCloudResourceContainerGcpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.internalValue"></a>

```go
func InternalValue() MwsWorkspacesCloudResourceContainerGcp
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a>

---


### MwsWorkspacesCloudResourceContainerOutputReference <a name="MwsWorkspacesCloudResourceContainerOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/mwsworkspaces"

mwsworkspaces.NewMwsWorkspacesCloudResourceContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwsWorkspacesCloudResourceContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.putGcp">PutGcp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcp` <a name="PutGcp" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.putGcp"></a>

```go
func PutGcp(value MwsWorkspacesCloudResourceContainerGcp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.putGcp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.gcp">Gcp</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference">MwsWorkspacesCloudResourceContainerGcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.gcpInput">GcpInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Gcp`<sup>Required</sup> <a name="Gcp" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.gcp"></a>

```go
func Gcp() MwsWorkspacesCloudResourceContainerGcpOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference">MwsWorkspacesCloudResourceContainerGcpOutputReference</a>

---

##### `GcpInput`<sup>Optional</sup> <a name="GcpInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.gcpInput"></a>

```go
func GcpInput() MwsWorkspacesCloudResourceContainerGcp
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() MwsWorkspacesCloudResourceContainer
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a>

---


### MwsWorkspacesExternalCustomerInfoOutputReference <a name="MwsWorkspacesExternalCustomerInfoOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/mwsworkspaces"

mwsworkspaces.NewMwsWorkspacesExternalCustomerInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwsWorkspacesExternalCustomerInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserEmailInput">AuthoritativeUserEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserFullNameInput">AuthoritativeUserFullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.customerNameInput">CustomerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserEmail">AuthoritativeUserEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserFullName">AuthoritativeUserFullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.customerName">CustomerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthoritativeUserEmailInput`<sup>Optional</sup> <a name="AuthoritativeUserEmailInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserEmailInput"></a>

```go
func AuthoritativeUserEmailInput() *string
```

- *Type:* *string

---

##### `AuthoritativeUserFullNameInput`<sup>Optional</sup> <a name="AuthoritativeUserFullNameInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserFullNameInput"></a>

```go
func AuthoritativeUserFullNameInput() *string
```

- *Type:* *string

---

##### `CustomerNameInput`<sup>Optional</sup> <a name="CustomerNameInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.customerNameInput"></a>

```go
func CustomerNameInput() *string
```

- *Type:* *string

---

##### `AuthoritativeUserEmail`<sup>Required</sup> <a name="AuthoritativeUserEmail" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserEmail"></a>

```go
func AuthoritativeUserEmail() *string
```

- *Type:* *string

---

##### `AuthoritativeUserFullName`<sup>Required</sup> <a name="AuthoritativeUserFullName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserFullName"></a>

```go
func AuthoritativeUserFullName() *string
```

- *Type:* *string

---

##### `CustomerName`<sup>Required</sup> <a name="CustomerName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.customerName"></a>

```go
func CustomerName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() MwsWorkspacesExternalCustomerInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a>

---


### MwsWorkspacesGcpManagedNetworkConfigOutputReference <a name="MwsWorkspacesGcpManagedNetworkConfigOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/mwsworkspaces"

mwsworkspaces.NewMwsWorkspacesGcpManagedNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwsWorkspacesGcpManagedNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resetGkeClusterPodIpRange">ResetGkeClusterPodIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resetGkeClusterServiceIpRange">ResetGkeClusterServiceIpRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGkeClusterPodIpRange` <a name="ResetGkeClusterPodIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resetGkeClusterPodIpRange"></a>

```go
func ResetGkeClusterPodIpRange()
```

##### `ResetGkeClusterServiceIpRange` <a name="ResetGkeClusterServiceIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resetGkeClusterServiceIpRange"></a>

```go
func ResetGkeClusterServiceIpRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterPodIpRangeInput">GkeClusterPodIpRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterServiceIpRangeInput">GkeClusterServiceIpRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.subnetCidrInput">SubnetCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterPodIpRange">GkeClusterPodIpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterServiceIpRange">GkeClusterServiceIpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.subnetCidr">SubnetCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GkeClusterPodIpRangeInput`<sup>Optional</sup> <a name="GkeClusterPodIpRangeInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterPodIpRangeInput"></a>

```go
func GkeClusterPodIpRangeInput() *string
```

- *Type:* *string

---

##### `GkeClusterServiceIpRangeInput`<sup>Optional</sup> <a name="GkeClusterServiceIpRangeInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterServiceIpRangeInput"></a>

```go
func GkeClusterServiceIpRangeInput() *string
```

- *Type:* *string

---

##### `SubnetCidrInput`<sup>Optional</sup> <a name="SubnetCidrInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.subnetCidrInput"></a>

```go
func SubnetCidrInput() *string
```

- *Type:* *string

---

##### `GkeClusterPodIpRange`<sup>Required</sup> <a name="GkeClusterPodIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterPodIpRange"></a>

```go
func GkeClusterPodIpRange() *string
```

- *Type:* *string

---

##### `GkeClusterServiceIpRange`<sup>Required</sup> <a name="GkeClusterServiceIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterServiceIpRange"></a>

```go
func GkeClusterServiceIpRange() *string
```

- *Type:* *string

---

##### `SubnetCidr`<sup>Required</sup> <a name="SubnetCidr" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.subnetCidr"></a>

```go
func SubnetCidr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() MwsWorkspacesGcpManagedNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a>

---


### MwsWorkspacesGkeConfigOutputReference <a name="MwsWorkspacesGkeConfigOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/mwsworkspaces"

mwsworkspaces.NewMwsWorkspacesGkeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwsWorkspacesGkeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resetConnectivityType">ResetConnectivityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resetMasterIpRange">ResetMasterIpRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectivityType` <a name="ResetConnectivityType" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resetConnectivityType"></a>

```go
func ResetConnectivityType()
```

##### `ResetMasterIpRange` <a name="ResetMasterIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resetMasterIpRange"></a>

```go
func ResetMasterIpRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.connectivityTypeInput">ConnectivityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.masterIpRangeInput">MasterIpRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.connectivityType">ConnectivityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.masterIpRange">MasterIpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectivityTypeInput`<sup>Optional</sup> <a name="ConnectivityTypeInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.connectivityTypeInput"></a>

```go
func ConnectivityTypeInput() *string
```

- *Type:* *string

---

##### `MasterIpRangeInput`<sup>Optional</sup> <a name="MasterIpRangeInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.masterIpRangeInput"></a>

```go
func MasterIpRangeInput() *string
```

- *Type:* *string

---

##### `ConnectivityType`<sup>Required</sup> <a name="ConnectivityType" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.connectivityType"></a>

```go
func ConnectivityType() *string
```

- *Type:* *string

---

##### `MasterIpRange`<sup>Required</sup> <a name="MasterIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.masterIpRange"></a>

```go
func MasterIpRange() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() MwsWorkspacesGkeConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a>

---


### MwsWorkspacesTimeoutsOutputReference <a name="MwsWorkspacesTimeoutsOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/mwsworkspaces"

mwsworkspaces.NewMwsWorkspacesTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwsWorkspacesTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MwsWorkspacesTokenOutputReference <a name="MwsWorkspacesTokenOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/mwsworkspaces"

mwsworkspaces.NewMwsWorkspacesTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwsWorkspacesTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetLifetimeSeconds">ResetLifetimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetTokenId">ResetTokenId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetTokenValue">ResetTokenValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetLifetimeSeconds` <a name="ResetLifetimeSeconds" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetLifetimeSeconds"></a>

```go
func ResetLifetimeSeconds()
```

##### `ResetTokenId` <a name="ResetTokenId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetTokenId"></a>

```go
func ResetTokenId()
```

##### `ResetTokenValue` <a name="ResetTokenValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetTokenValue"></a>

```go
func ResetTokenValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.lifetimeSecondsInput">LifetimeSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenIdInput">TokenIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenValueInput">TokenValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.lifetimeSeconds">LifetimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenId">TokenId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenValue">TokenValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `LifetimeSecondsInput`<sup>Optional</sup> <a name="LifetimeSecondsInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.lifetimeSecondsInput"></a>

```go
func LifetimeSecondsInput() *f64
```

- *Type:* *f64

---

##### `TokenIdInput`<sup>Optional</sup> <a name="TokenIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenIdInput"></a>

```go
func TokenIdInput() *string
```

- *Type:* *string

---

##### `TokenValueInput`<sup>Optional</sup> <a name="TokenValueInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenValueInput"></a>

```go
func TokenValueInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `LifetimeSeconds`<sup>Required</sup> <a name="LifetimeSeconds" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.lifetimeSeconds"></a>

```go
func LifetimeSeconds() *f64
```

- *Type:* *f64

---

##### `TokenId`<sup>Required</sup> <a name="TokenId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenId"></a>

```go
func TokenId() *string
```

- *Type:* *string

---

##### `TokenValue`<sup>Required</sup> <a name="TokenValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenValue"></a>

```go
func TokenValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() MwsWorkspacesToken
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a>

---



