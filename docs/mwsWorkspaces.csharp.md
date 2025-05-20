# `mwsWorkspaces` Submodule <a name="`mwsWorkspaces` Submodule" id="@cdktf/provider-databricks.mwsWorkspaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsWorkspaces <a name="MwsWorkspaces" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces databricks_mws_workspaces}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsWorkspaces(Construct Scope, string Id, MwsWorkspacesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig">MwsWorkspacesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudResourceContainer` <a name="PutCloudResourceContainer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putCloudResourceContainer"></a>

```csharp
private void PutCloudResourceContainer(MwsWorkspacesCloudResourceContainer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putCloudResourceContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a>

---

##### `PutExternalCustomerInfo` <a name="PutExternalCustomerInfo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putExternalCustomerInfo"></a>

```csharp
private void PutExternalCustomerInfo(MwsWorkspacesExternalCustomerInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putExternalCustomerInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a>

---

##### `PutGcpManagedNetworkConfig` <a name="PutGcpManagedNetworkConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGcpManagedNetworkConfig"></a>

```csharp
private void PutGcpManagedNetworkConfig(MwsWorkspacesGcpManagedNetworkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGcpManagedNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a>

---

##### `PutGkeConfig` <a name="PutGkeConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGkeConfig"></a>

```csharp
private void PutGkeConfig(MwsWorkspacesGkeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGkeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putTimeouts"></a>

```csharp
private void PutTimeouts(MwsWorkspacesTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a>

---

##### `PutToken` <a name="PutToken" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putToken"></a>

```csharp
private void PutToken(MwsWorkspacesToken Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a>

---

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetAwsRegion"></a>

```csharp
private void ResetAwsRegion()
```

##### `ResetCloud` <a name="ResetCloud" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCloud"></a>

```csharp
private void ResetCloud()
```

##### `ResetCloudResourceContainer` <a name="ResetCloudResourceContainer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCloudResourceContainer"></a>

```csharp
private void ResetCloudResourceContainer()
```

##### `ResetComputeMode` <a name="ResetComputeMode" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetComputeMode"></a>

```csharp
private void ResetComputeMode()
```

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCreationTime"></a>

```csharp
private void ResetCreationTime()
```

##### `ResetCredentialsId` <a name="ResetCredentialsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCredentialsId"></a>

```csharp
private void ResetCredentialsId()
```

##### `ResetCustomerManagedKeyId` <a name="ResetCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCustomerManagedKeyId"></a>

```csharp
private void ResetCustomerManagedKeyId()
```

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCustomTags"></a>

```csharp
private void ResetCustomTags()
```

##### `ResetDeploymentName` <a name="ResetDeploymentName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetDeploymentName"></a>

```csharp
private void ResetDeploymentName()
```

##### `ResetExternalCustomerInfo` <a name="ResetExternalCustomerInfo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetExternalCustomerInfo"></a>

```csharp
private void ResetExternalCustomerInfo()
```

##### `ResetGcpManagedNetworkConfig` <a name="ResetGcpManagedNetworkConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetGcpManagedNetworkConfig"></a>

```csharp
private void ResetGcpManagedNetworkConfig()
```

##### `ResetGkeConfig` <a name="ResetGkeConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetGkeConfig"></a>

```csharp
private void ResetGkeConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsNoPublicIpEnabled` <a name="ResetIsNoPublicIpEnabled" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetIsNoPublicIpEnabled"></a>

```csharp
private void ResetIsNoPublicIpEnabled()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetManagedServicesCustomerManagedKeyId` <a name="ResetManagedServicesCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetManagedServicesCustomerManagedKeyId"></a>

```csharp
private void ResetManagedServicesCustomerManagedKeyId()
```

##### `ResetNetworkId` <a name="ResetNetworkId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetNetworkId"></a>

```csharp
private void ResetNetworkId()
```

##### `ResetPricingTier` <a name="ResetPricingTier" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetPricingTier"></a>

```csharp
private void ResetPricingTier()
```

##### `ResetPrivateAccessSettingsId` <a name="ResetPrivateAccessSettingsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetPrivateAccessSettingsId"></a>

```csharp
private void ResetPrivateAccessSettingsId()
```

##### `ResetStorageConfigurationId` <a name="ResetStorageConfigurationId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetStorageConfigurationId"></a>

```csharp
private void ResetStorageConfigurationId()
```

##### `ResetStorageCustomerManagedKeyId` <a name="ResetStorageCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetStorageCustomerManagedKeyId"></a>

```csharp
private void ResetStorageCustomerManagedKeyId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetToken"></a>

```csharp
private void ResetToken()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```

##### `ResetWorkspaceStatus` <a name="ResetWorkspaceStatus" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceStatus"></a>

```csharp
private void ResetWorkspaceStatus()
```

##### `ResetWorkspaceStatusMessage` <a name="ResetWorkspaceStatusMessage" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceStatusMessage"></a>

```csharp
private void ResetWorkspaceStatusMessage()
```

##### `ResetWorkspaceUrl` <a name="ResetWorkspaceUrl" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceUrl"></a>

```csharp
private void ResetWorkspaceUrl()
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

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsWorkspaces.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsWorkspaces.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsWorkspaces.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsWorkspaces.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MwsWorkspaces resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MwsWorkspaces to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MwsWorkspaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MwsWorkspaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudResourceContainer">CloudResourceContainer</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference">MwsWorkspacesCloudResourceContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.effectiveComputeMode">EffectiveComputeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.externalCustomerInfo">ExternalCustomerInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference">MwsWorkspacesExternalCustomerInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpManagedNetworkConfig">GcpManagedNetworkConfig</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference">MwsWorkspacesGcpManagedNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpWorkspaceSa">GcpWorkspaceSa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gkeConfig">GkeConfig</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference">MwsWorkspacesGkeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference">MwsWorkspacesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.token">Token</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference">MwsWorkspacesTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.awsRegionInput">AwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudInput">CloudInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudResourceContainerInput">CloudResourceContainerInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.computeModeInput">ComputeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.creationTimeInput">CreationTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.credentialsIdInput">CredentialsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customerManagedKeyIdInput">CustomerManagedKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customTagsInput">CustomTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.deploymentNameInput">DeploymentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.externalCustomerInfoInput">ExternalCustomerInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpManagedNetworkConfigInput">GcpManagedNetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gkeConfigInput">GkeConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.isNoPublicIpEnabledInput">IsNoPublicIpEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.managedServicesCustomerManagedKeyIdInput">ManagedServicesCustomerManagedKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.networkIdInput">NetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.pricingTierInput">PricingTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.privateAccessSettingsIdInput">PrivateAccessSettingsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageConfigurationIdInput">StorageConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageCustomerManagedKeyIdInput">StorageCustomerManagedKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.tokenInput">TokenInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceNameInput">WorkspaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusInput">WorkspaceStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusMessageInput">WorkspaceStatusMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceUrlInput">WorkspaceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.awsRegion">AwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloud">Cloud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.computeMode">ComputeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.creationTime">CreationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.credentialsId">CredentialsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customerManagedKeyId">CustomerManagedKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customTags">CustomTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.deploymentName">DeploymentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.isNoPublicIpEnabled">IsNoPublicIpEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.managedServicesCustomerManagedKeyId">ManagedServicesCustomerManagedKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.networkId">NetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.pricingTier">PricingTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.privateAccessSettingsId">PrivateAccessSettingsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageConfigurationId">StorageConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageCustomerManagedKeyId">StorageCustomerManagedKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceId">WorkspaceId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceName">WorkspaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatus">WorkspaceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusMessage">WorkspaceStatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceUrl">WorkspaceUrl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CloudResourceContainer`<sup>Required</sup> <a name="CloudResourceContainer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudResourceContainer"></a>

```csharp
public MwsWorkspacesCloudResourceContainerOutputReference CloudResourceContainer { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference">MwsWorkspacesCloudResourceContainerOutputReference</a>

---

##### `EffectiveComputeMode`<sup>Required</sup> <a name="EffectiveComputeMode" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.effectiveComputeMode"></a>

```csharp
public string EffectiveComputeMode { get; }
```

- *Type:* string

---

##### `ExternalCustomerInfo`<sup>Required</sup> <a name="ExternalCustomerInfo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.externalCustomerInfo"></a>

```csharp
public MwsWorkspacesExternalCustomerInfoOutputReference ExternalCustomerInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference">MwsWorkspacesExternalCustomerInfoOutputReference</a>

---

##### `GcpManagedNetworkConfig`<sup>Required</sup> <a name="GcpManagedNetworkConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpManagedNetworkConfig"></a>

```csharp
public MwsWorkspacesGcpManagedNetworkConfigOutputReference GcpManagedNetworkConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference">MwsWorkspacesGcpManagedNetworkConfigOutputReference</a>

---

##### `GcpWorkspaceSa`<sup>Required</sup> <a name="GcpWorkspaceSa" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpWorkspaceSa"></a>

```csharp
public string GcpWorkspaceSa { get; }
```

- *Type:* string

---

##### `GkeConfig`<sup>Required</sup> <a name="GkeConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gkeConfig"></a>

```csharp
public MwsWorkspacesGkeConfigOutputReference GkeConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference">MwsWorkspacesGkeConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.timeouts"></a>

```csharp
public MwsWorkspacesTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference">MwsWorkspacesTimeoutsOutputReference</a>

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.token"></a>

```csharp
public MwsWorkspacesTokenOutputReference Token { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference">MwsWorkspacesTokenOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.awsRegionInput"></a>

```csharp
public string AwsRegionInput { get; }
```

- *Type:* string

---

##### `CloudInput`<sup>Optional</sup> <a name="CloudInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudInput"></a>

```csharp
public string CloudInput { get; }
```

- *Type:* string

---

##### `CloudResourceContainerInput`<sup>Optional</sup> <a name="CloudResourceContainerInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudResourceContainerInput"></a>

```csharp
public MwsWorkspacesCloudResourceContainer CloudResourceContainerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a>

---

##### `ComputeModeInput`<sup>Optional</sup> <a name="ComputeModeInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.computeModeInput"></a>

```csharp
public string ComputeModeInput { get; }
```

- *Type:* string

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.creationTimeInput"></a>

```csharp
public double CreationTimeInput { get; }
```

- *Type:* double

---

##### `CredentialsIdInput`<sup>Optional</sup> <a name="CredentialsIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.credentialsIdInput"></a>

```csharp
public string CredentialsIdInput { get; }
```

- *Type:* string

---

##### `CustomerManagedKeyIdInput`<sup>Optional</sup> <a name="CustomerManagedKeyIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customerManagedKeyIdInput"></a>

```csharp
public string CustomerManagedKeyIdInput { get; }
```

- *Type:* string

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeploymentNameInput`<sup>Optional</sup> <a name="DeploymentNameInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.deploymentNameInput"></a>

```csharp
public string DeploymentNameInput { get; }
```

- *Type:* string

---

##### `ExternalCustomerInfoInput`<sup>Optional</sup> <a name="ExternalCustomerInfoInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.externalCustomerInfoInput"></a>

```csharp
public MwsWorkspacesExternalCustomerInfo ExternalCustomerInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a>

---

##### `GcpManagedNetworkConfigInput`<sup>Optional</sup> <a name="GcpManagedNetworkConfigInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpManagedNetworkConfigInput"></a>

```csharp
public MwsWorkspacesGcpManagedNetworkConfig GcpManagedNetworkConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a>

---

##### `GkeConfigInput`<sup>Optional</sup> <a name="GkeConfigInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gkeConfigInput"></a>

```csharp
public MwsWorkspacesGkeConfig GkeConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsNoPublicIpEnabledInput`<sup>Optional</sup> <a name="IsNoPublicIpEnabledInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.isNoPublicIpEnabledInput"></a>

```csharp
public object IsNoPublicIpEnabledInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManagedServicesCustomerManagedKeyIdInput`<sup>Optional</sup> <a name="ManagedServicesCustomerManagedKeyIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.managedServicesCustomerManagedKeyIdInput"></a>

```csharp
public string ManagedServicesCustomerManagedKeyIdInput { get; }
```

- *Type:* string

---

##### `NetworkIdInput`<sup>Optional</sup> <a name="NetworkIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.networkIdInput"></a>

```csharp
public string NetworkIdInput { get; }
```

- *Type:* string

---

##### `PricingTierInput`<sup>Optional</sup> <a name="PricingTierInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.pricingTierInput"></a>

```csharp
public string PricingTierInput { get; }
```

- *Type:* string

---

##### `PrivateAccessSettingsIdInput`<sup>Optional</sup> <a name="PrivateAccessSettingsIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.privateAccessSettingsIdInput"></a>

```csharp
public string PrivateAccessSettingsIdInput { get; }
```

- *Type:* string

---

##### `StorageConfigurationIdInput`<sup>Optional</sup> <a name="StorageConfigurationIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageConfigurationIdInput"></a>

```csharp
public string StorageConfigurationIdInput { get; }
```

- *Type:* string

---

##### `StorageCustomerManagedKeyIdInput`<sup>Optional</sup> <a name="StorageCustomerManagedKeyIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageCustomerManagedKeyIdInput"></a>

```csharp
public string StorageCustomerManagedKeyIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.tokenInput"></a>

```csharp
public MwsWorkspacesToken TokenInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a>

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceIdInput"></a>

```csharp
public double WorkspaceIdInput { get; }
```

- *Type:* double

---

##### `WorkspaceNameInput`<sup>Optional</sup> <a name="WorkspaceNameInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceNameInput"></a>

```csharp
public string WorkspaceNameInput { get; }
```

- *Type:* string

---

##### `WorkspaceStatusInput`<sup>Optional</sup> <a name="WorkspaceStatusInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusInput"></a>

```csharp
public string WorkspaceStatusInput { get; }
```

- *Type:* string

---

##### `WorkspaceStatusMessageInput`<sup>Optional</sup> <a name="WorkspaceStatusMessageInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusMessageInput"></a>

```csharp
public string WorkspaceStatusMessageInput { get; }
```

- *Type:* string

---

##### `WorkspaceUrlInput`<sup>Optional</sup> <a name="WorkspaceUrlInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceUrlInput"></a>

```csharp
public string WorkspaceUrlInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.awsRegion"></a>

```csharp
public string AwsRegion { get; }
```

- *Type:* string

---

##### `Cloud`<sup>Required</sup> <a name="Cloud" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloud"></a>

```csharp
public string Cloud { get; }
```

- *Type:* string

---

##### `ComputeMode`<sup>Required</sup> <a name="ComputeMode" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.computeMode"></a>

```csharp
public string ComputeMode { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.creationTime"></a>

```csharp
public double CreationTime { get; }
```

- *Type:* double

---

##### `CredentialsId`<sup>Required</sup> <a name="CredentialsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.credentialsId"></a>

```csharp
public string CredentialsId { get; }
```

- *Type:* string

---

##### `CustomerManagedKeyId`<sup>Required</sup> <a name="CustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customerManagedKeyId"></a>

```csharp
public string CustomerManagedKeyId { get; }
```

- *Type:* string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeploymentName`<sup>Required</sup> <a name="DeploymentName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.deploymentName"></a>

```csharp
public string DeploymentName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsNoPublicIpEnabled`<sup>Required</sup> <a name="IsNoPublicIpEnabled" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.isNoPublicIpEnabled"></a>

```csharp
public object IsNoPublicIpEnabled { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ManagedServicesCustomerManagedKeyId`<sup>Required</sup> <a name="ManagedServicesCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.managedServicesCustomerManagedKeyId"></a>

```csharp
public string ManagedServicesCustomerManagedKeyId { get; }
```

- *Type:* string

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.networkId"></a>

```csharp
public string NetworkId { get; }
```

- *Type:* string

---

##### `PricingTier`<sup>Required</sup> <a name="PricingTier" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.pricingTier"></a>

```csharp
public string PricingTier { get; }
```

- *Type:* string

---

##### `PrivateAccessSettingsId`<sup>Required</sup> <a name="PrivateAccessSettingsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.privateAccessSettingsId"></a>

```csharp
public string PrivateAccessSettingsId { get; }
```

- *Type:* string

---

##### `StorageConfigurationId`<sup>Required</sup> <a name="StorageConfigurationId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageConfigurationId"></a>

```csharp
public string StorageConfigurationId { get; }
```

- *Type:* string

---

##### `StorageCustomerManagedKeyId`<sup>Required</sup> <a name="StorageCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageCustomerManagedKeyId"></a>

```csharp
public string StorageCustomerManagedKeyId { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceId"></a>

```csharp
public double WorkspaceId { get; }
```

- *Type:* double

---

##### `WorkspaceName`<sup>Required</sup> <a name="WorkspaceName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceName"></a>

```csharp
public string WorkspaceName { get; }
```

- *Type:* string

---

##### `WorkspaceStatus`<sup>Required</sup> <a name="WorkspaceStatus" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatus"></a>

```csharp
public string WorkspaceStatus { get; }
```

- *Type:* string

---

##### `WorkspaceStatusMessage`<sup>Required</sup> <a name="WorkspaceStatusMessage" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusMessage"></a>

```csharp
public string WorkspaceStatusMessage { get; }
```

- *Type:* string

---

##### `WorkspaceUrl`<sup>Required</sup> <a name="WorkspaceUrl" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceUrl"></a>

```csharp
public string WorkspaceUrl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsWorkspacesCloudResourceContainer <a name="MwsWorkspacesCloudResourceContainer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsWorkspacesCloudResourceContainer {
    MwsWorkspacesCloudResourceContainerGcp Gcp
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer.property.gcp">Gcp</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a></code> | gcp block. |

---

##### `Gcp`<sup>Required</sup> <a name="Gcp" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer.property.gcp"></a>

```csharp
public MwsWorkspacesCloudResourceContainerGcp Gcp { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a>

gcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#gcp MwsWorkspaces#gcp}

---

### MwsWorkspacesCloudResourceContainerGcp <a name="MwsWorkspacesCloudResourceContainerGcp" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsWorkspacesCloudResourceContainerGcp {
    string ProjectId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#project_id MwsWorkspaces#project_id}. |

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#project_id MwsWorkspaces#project_id}.

---

### MwsWorkspacesConfig <a name="MwsWorkspacesConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsWorkspacesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string WorkspaceName,
    string AwsRegion = null,
    string Cloud = null,
    MwsWorkspacesCloudResourceContainer CloudResourceContainer = null,
    string ComputeMode = null,
    double CreationTime = null,
    string CredentialsId = null,
    string CustomerManagedKeyId = null,
    System.Collections.Generic.IDictionary<string, string> CustomTags = null,
    string DeploymentName = null,
    MwsWorkspacesExternalCustomerInfo ExternalCustomerInfo = null,
    MwsWorkspacesGcpManagedNetworkConfig GcpManagedNetworkConfig = null,
    MwsWorkspacesGkeConfig GkeConfig = null,
    string Id = null,
    object IsNoPublicIpEnabled = null,
    string Location = null,
    string ManagedServicesCustomerManagedKeyId = null,
    string NetworkId = null,
    string PricingTier = null,
    string PrivateAccessSettingsId = null,
    string StorageConfigurationId = null,
    string StorageCustomerManagedKeyId = null,
    MwsWorkspacesTimeouts Timeouts = null,
    MwsWorkspacesToken Token = null,
    double WorkspaceId = null,
    string WorkspaceStatus = null,
    string WorkspaceStatusMessage = null,
    string WorkspaceUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#account_id MwsWorkspaces#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceName">WorkspaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#workspace_name MwsWorkspaces#workspace_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.awsRegion">AwsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#aws_region MwsWorkspaces#aws_region}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.cloud">Cloud</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#cloud MwsWorkspaces#cloud}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.cloudResourceContainer">CloudResourceContainer</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a></code> | cloud_resource_container block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.computeMode">ComputeMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#compute_mode MwsWorkspaces#compute_mode}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.creationTime">CreationTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#creation_time MwsWorkspaces#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.credentialsId">CredentialsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#credentials_id MwsWorkspaces#credentials_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.customerManagedKeyId">CustomerManagedKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#customer_managed_key_id MwsWorkspaces#customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.customTags">CustomTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#custom_tags MwsWorkspaces#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.deploymentName">DeploymentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#deployment_name MwsWorkspaces#deployment_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.externalCustomerInfo">ExternalCustomerInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a></code> | external_customer_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.gcpManagedNetworkConfig">GcpManagedNetworkConfig</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a></code> | gcp_managed_network_config block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.gkeConfig">GkeConfig</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a></code> | gke_config block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#id MwsWorkspaces#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.isNoPublicIpEnabled">IsNoPublicIpEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#is_no_public_ip_enabled MwsWorkspaces#is_no_public_ip_enabled}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#location MwsWorkspaces#location}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.managedServicesCustomerManagedKeyId">ManagedServicesCustomerManagedKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#managed_services_customer_managed_key_id MwsWorkspaces#managed_services_customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.networkId">NetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#network_id MwsWorkspaces#network_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.pricingTier">PricingTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#pricing_tier MwsWorkspaces#pricing_tier}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.privateAccessSettingsId">PrivateAccessSettingsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#private_access_settings_id MwsWorkspaces#private_access_settings_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.storageConfigurationId">StorageConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#storage_configuration_id MwsWorkspaces#storage_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.storageCustomerManagedKeyId">StorageCustomerManagedKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#storage_customer_managed_key_id MwsWorkspaces#storage_customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.token">Token</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a></code> | token block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceId">WorkspaceId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#workspace_id MwsWorkspaces#workspace_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceStatus">WorkspaceStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#workspace_status MwsWorkspaces#workspace_status}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceStatusMessage">WorkspaceStatusMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#workspace_status_message MwsWorkspaces#workspace_status_message}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceUrl">WorkspaceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#workspace_url MwsWorkspaces#workspace_url}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#account_id MwsWorkspaces#account_id}.

---

##### `WorkspaceName`<sup>Required</sup> <a name="WorkspaceName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceName"></a>

```csharp
public string WorkspaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#workspace_name MwsWorkspaces#workspace_name}.

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.awsRegion"></a>

```csharp
public string AwsRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#aws_region MwsWorkspaces#aws_region}.

---

##### `Cloud`<sup>Optional</sup> <a name="Cloud" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.cloud"></a>

```csharp
public string Cloud { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#cloud MwsWorkspaces#cloud}.

---

##### `CloudResourceContainer`<sup>Optional</sup> <a name="CloudResourceContainer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.cloudResourceContainer"></a>

```csharp
public MwsWorkspacesCloudResourceContainer CloudResourceContainer { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a>

cloud_resource_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#cloud_resource_container MwsWorkspaces#cloud_resource_container}

---

##### `ComputeMode`<sup>Optional</sup> <a name="ComputeMode" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.computeMode"></a>

```csharp
public string ComputeMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#compute_mode MwsWorkspaces#compute_mode}.

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.creationTime"></a>

```csharp
public double CreationTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#creation_time MwsWorkspaces#creation_time}.

---

##### `CredentialsId`<sup>Optional</sup> <a name="CredentialsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.credentialsId"></a>

```csharp
public string CredentialsId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#credentials_id MwsWorkspaces#credentials_id}.

---

##### `CustomerManagedKeyId`<sup>Optional</sup> <a name="CustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.customerManagedKeyId"></a>

```csharp
public string CustomerManagedKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#customer_managed_key_id MwsWorkspaces#customer_managed_key_id}.

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.customTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#custom_tags MwsWorkspaces#custom_tags}.

---

##### `DeploymentName`<sup>Optional</sup> <a name="DeploymentName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.deploymentName"></a>

```csharp
public string DeploymentName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#deployment_name MwsWorkspaces#deployment_name}.

---

##### `ExternalCustomerInfo`<sup>Optional</sup> <a name="ExternalCustomerInfo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.externalCustomerInfo"></a>

```csharp
public MwsWorkspacesExternalCustomerInfo ExternalCustomerInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a>

external_customer_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#external_customer_info MwsWorkspaces#external_customer_info}

---

##### `GcpManagedNetworkConfig`<sup>Optional</sup> <a name="GcpManagedNetworkConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.gcpManagedNetworkConfig"></a>

```csharp
public MwsWorkspacesGcpManagedNetworkConfig GcpManagedNetworkConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a>

gcp_managed_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#gcp_managed_network_config MwsWorkspaces#gcp_managed_network_config}

---

##### `GkeConfig`<sup>Optional</sup> <a name="GkeConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.gkeConfig"></a>

```csharp
public MwsWorkspacesGkeConfig GkeConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a>

gke_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#gke_config MwsWorkspaces#gke_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#id MwsWorkspaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsNoPublicIpEnabled`<sup>Optional</sup> <a name="IsNoPublicIpEnabled" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.isNoPublicIpEnabled"></a>

```csharp
public object IsNoPublicIpEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#is_no_public_ip_enabled MwsWorkspaces#is_no_public_ip_enabled}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#location MwsWorkspaces#location}.

---

##### `ManagedServicesCustomerManagedKeyId`<sup>Optional</sup> <a name="ManagedServicesCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.managedServicesCustomerManagedKeyId"></a>

```csharp
public string ManagedServicesCustomerManagedKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#managed_services_customer_managed_key_id MwsWorkspaces#managed_services_customer_managed_key_id}.

---

##### `NetworkId`<sup>Optional</sup> <a name="NetworkId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.networkId"></a>

```csharp
public string NetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#network_id MwsWorkspaces#network_id}.

---

##### `PricingTier`<sup>Optional</sup> <a name="PricingTier" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.pricingTier"></a>

```csharp
public string PricingTier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#pricing_tier MwsWorkspaces#pricing_tier}.

---

##### `PrivateAccessSettingsId`<sup>Optional</sup> <a name="PrivateAccessSettingsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.privateAccessSettingsId"></a>

```csharp
public string PrivateAccessSettingsId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#private_access_settings_id MwsWorkspaces#private_access_settings_id}.

---

##### `StorageConfigurationId`<sup>Optional</sup> <a name="StorageConfigurationId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.storageConfigurationId"></a>

```csharp
public string StorageConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#storage_configuration_id MwsWorkspaces#storage_configuration_id}.

---

##### `StorageCustomerManagedKeyId`<sup>Optional</sup> <a name="StorageCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.storageCustomerManagedKeyId"></a>

```csharp
public string StorageCustomerManagedKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#storage_customer_managed_key_id MwsWorkspaces#storage_customer_managed_key_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.timeouts"></a>

```csharp
public MwsWorkspacesTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#timeouts MwsWorkspaces#timeouts}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.token"></a>

```csharp
public MwsWorkspacesToken Token { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a>

token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#token MwsWorkspaces#token}

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceId"></a>

```csharp
public double WorkspaceId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#workspace_id MwsWorkspaces#workspace_id}.

---

##### `WorkspaceStatus`<sup>Optional</sup> <a name="WorkspaceStatus" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceStatus"></a>

```csharp
public string WorkspaceStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#workspace_status MwsWorkspaces#workspace_status}.

---

##### `WorkspaceStatusMessage`<sup>Optional</sup> <a name="WorkspaceStatusMessage" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceStatusMessage"></a>

```csharp
public string WorkspaceStatusMessage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#workspace_status_message MwsWorkspaces#workspace_status_message}.

---

##### `WorkspaceUrl`<sup>Optional</sup> <a name="WorkspaceUrl" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceUrl"></a>

```csharp
public string WorkspaceUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#workspace_url MwsWorkspaces#workspace_url}.

---

### MwsWorkspacesExternalCustomerInfo <a name="MwsWorkspacesExternalCustomerInfo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsWorkspacesExternalCustomerInfo {
    string AuthoritativeUserEmail,
    string AuthoritativeUserFullName,
    string CustomerName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.authoritativeUserEmail">AuthoritativeUserEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#authoritative_user_email MwsWorkspaces#authoritative_user_email}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.authoritativeUserFullName">AuthoritativeUserFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#authoritative_user_full_name MwsWorkspaces#authoritative_user_full_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.customerName">CustomerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#customer_name MwsWorkspaces#customer_name}. |

---

##### `AuthoritativeUserEmail`<sup>Required</sup> <a name="AuthoritativeUserEmail" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.authoritativeUserEmail"></a>

```csharp
public string AuthoritativeUserEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#authoritative_user_email MwsWorkspaces#authoritative_user_email}.

---

##### `AuthoritativeUserFullName`<sup>Required</sup> <a name="AuthoritativeUserFullName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.authoritativeUserFullName"></a>

```csharp
public string AuthoritativeUserFullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#authoritative_user_full_name MwsWorkspaces#authoritative_user_full_name}.

---

##### `CustomerName`<sup>Required</sup> <a name="CustomerName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.customerName"></a>

```csharp
public string CustomerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#customer_name MwsWorkspaces#customer_name}.

---

### MwsWorkspacesGcpManagedNetworkConfig <a name="MwsWorkspacesGcpManagedNetworkConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsWorkspacesGcpManagedNetworkConfig {
    string SubnetCidr,
    string GkeClusterPodIpRange = null,
    string GkeClusterServiceIpRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.subnetCidr">SubnetCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#subnet_cidr MwsWorkspaces#subnet_cidr}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.gkeClusterPodIpRange">GkeClusterPodIpRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#gke_cluster_pod_ip_range MwsWorkspaces#gke_cluster_pod_ip_range}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.gkeClusterServiceIpRange">GkeClusterServiceIpRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#gke_cluster_service_ip_range MwsWorkspaces#gke_cluster_service_ip_range}. |

---

##### `SubnetCidr`<sup>Required</sup> <a name="SubnetCidr" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.subnetCidr"></a>

```csharp
public string SubnetCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#subnet_cidr MwsWorkspaces#subnet_cidr}.

---

##### `GkeClusterPodIpRange`<sup>Optional</sup> <a name="GkeClusterPodIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.gkeClusterPodIpRange"></a>

```csharp
public string GkeClusterPodIpRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#gke_cluster_pod_ip_range MwsWorkspaces#gke_cluster_pod_ip_range}.

---

##### `GkeClusterServiceIpRange`<sup>Optional</sup> <a name="GkeClusterServiceIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.gkeClusterServiceIpRange"></a>

```csharp
public string GkeClusterServiceIpRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#gke_cluster_service_ip_range MwsWorkspaces#gke_cluster_service_ip_range}.

---

### MwsWorkspacesGkeConfig <a name="MwsWorkspacesGkeConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsWorkspacesGkeConfig {
    string ConnectivityType = null,
    string MasterIpRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.property.connectivityType">ConnectivityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#connectivity_type MwsWorkspaces#connectivity_type}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.property.masterIpRange">MasterIpRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#master_ip_range MwsWorkspaces#master_ip_range}. |

---

##### `ConnectivityType`<sup>Optional</sup> <a name="ConnectivityType" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.property.connectivityType"></a>

```csharp
public string ConnectivityType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#connectivity_type MwsWorkspaces#connectivity_type}.

---

##### `MasterIpRange`<sup>Optional</sup> <a name="MasterIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.property.masterIpRange"></a>

```csharp
public string MasterIpRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#master_ip_range MwsWorkspaces#master_ip_range}.

---

### MwsWorkspacesTimeouts <a name="MwsWorkspacesTimeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsWorkspacesTimeouts {
    string Create = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#create MwsWorkspaces#create}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#read MwsWorkspaces#read}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#update MwsWorkspaces#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#create MwsWorkspaces#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#read MwsWorkspaces#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#update MwsWorkspaces#update}.

---

### MwsWorkspacesToken <a name="MwsWorkspacesToken" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsWorkspacesToken {
    string Comment = null,
    double LifetimeSeconds = null,
    string TokenId = null,
    string TokenValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#comment MwsWorkspaces#comment}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.lifetimeSeconds">LifetimeSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#lifetime_seconds MwsWorkspaces#lifetime_seconds}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.tokenId">TokenId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#token_id MwsWorkspaces#token_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.tokenValue">TokenValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#token_value MwsWorkspaces#token_value}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#comment MwsWorkspaces#comment}.

---

##### `LifetimeSeconds`<sup>Optional</sup> <a name="LifetimeSeconds" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.lifetimeSeconds"></a>

```csharp
public double LifetimeSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#lifetime_seconds MwsWorkspaces#lifetime_seconds}.

---

##### `TokenId`<sup>Optional</sup> <a name="TokenId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.tokenId"></a>

```csharp
public string TokenId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#token_id MwsWorkspaces#token_id}.

---

##### `TokenValue`<sup>Optional</sup> <a name="TokenValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.tokenValue"></a>

```csharp
public string TokenValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/mws_workspaces#token_value MwsWorkspaces#token_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwsWorkspacesCloudResourceContainerGcpOutputReference <a name="MwsWorkspacesCloudResourceContainerGcpOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsWorkspacesCloudResourceContainerGcpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.internalValue"></a>

```csharp
public MwsWorkspacesCloudResourceContainerGcp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a>

---


### MwsWorkspacesCloudResourceContainerOutputReference <a name="MwsWorkspacesCloudResourceContainerOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsWorkspacesCloudResourceContainerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcp` <a name="PutGcp" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.putGcp"></a>

```csharp
private void PutGcp(MwsWorkspacesCloudResourceContainerGcp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.putGcp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.gcp">Gcp</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference">MwsWorkspacesCloudResourceContainerGcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.gcpInput">GcpInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Gcp`<sup>Required</sup> <a name="Gcp" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.gcp"></a>

```csharp
public MwsWorkspacesCloudResourceContainerGcpOutputReference Gcp { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference">MwsWorkspacesCloudResourceContainerGcpOutputReference</a>

---

##### `GcpInput`<sup>Optional</sup> <a name="GcpInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.gcpInput"></a>

```csharp
public MwsWorkspacesCloudResourceContainerGcp GcpInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.internalValue"></a>

```csharp
public MwsWorkspacesCloudResourceContainer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a>

---


### MwsWorkspacesExternalCustomerInfoOutputReference <a name="MwsWorkspacesExternalCustomerInfoOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsWorkspacesExternalCustomerInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserEmailInput">AuthoritativeUserEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserFullNameInput">AuthoritativeUserFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.customerNameInput">CustomerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserEmail">AuthoritativeUserEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserFullName">AuthoritativeUserFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.customerName">CustomerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthoritativeUserEmailInput`<sup>Optional</sup> <a name="AuthoritativeUserEmailInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserEmailInput"></a>

```csharp
public string AuthoritativeUserEmailInput { get; }
```

- *Type:* string

---

##### `AuthoritativeUserFullNameInput`<sup>Optional</sup> <a name="AuthoritativeUserFullNameInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserFullNameInput"></a>

```csharp
public string AuthoritativeUserFullNameInput { get; }
```

- *Type:* string

---

##### `CustomerNameInput`<sup>Optional</sup> <a name="CustomerNameInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.customerNameInput"></a>

```csharp
public string CustomerNameInput { get; }
```

- *Type:* string

---

##### `AuthoritativeUserEmail`<sup>Required</sup> <a name="AuthoritativeUserEmail" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserEmail"></a>

```csharp
public string AuthoritativeUserEmail { get; }
```

- *Type:* string

---

##### `AuthoritativeUserFullName`<sup>Required</sup> <a name="AuthoritativeUserFullName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserFullName"></a>

```csharp
public string AuthoritativeUserFullName { get; }
```

- *Type:* string

---

##### `CustomerName`<sup>Required</sup> <a name="CustomerName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.customerName"></a>

```csharp
public string CustomerName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.internalValue"></a>

```csharp
public MwsWorkspacesExternalCustomerInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a>

---


### MwsWorkspacesGcpManagedNetworkConfigOutputReference <a name="MwsWorkspacesGcpManagedNetworkConfigOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsWorkspacesGcpManagedNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGkeClusterPodIpRange` <a name="ResetGkeClusterPodIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resetGkeClusterPodIpRange"></a>

```csharp
private void ResetGkeClusterPodIpRange()
```

##### `ResetGkeClusterServiceIpRange` <a name="ResetGkeClusterServiceIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resetGkeClusterServiceIpRange"></a>

```csharp
private void ResetGkeClusterServiceIpRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterPodIpRangeInput">GkeClusterPodIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterServiceIpRangeInput">GkeClusterServiceIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.subnetCidrInput">SubnetCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterPodIpRange">GkeClusterPodIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterServiceIpRange">GkeClusterServiceIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.subnetCidr">SubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GkeClusterPodIpRangeInput`<sup>Optional</sup> <a name="GkeClusterPodIpRangeInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterPodIpRangeInput"></a>

```csharp
public string GkeClusterPodIpRangeInput { get; }
```

- *Type:* string

---

##### `GkeClusterServiceIpRangeInput`<sup>Optional</sup> <a name="GkeClusterServiceIpRangeInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterServiceIpRangeInput"></a>

```csharp
public string GkeClusterServiceIpRangeInput { get; }
```

- *Type:* string

---

##### `SubnetCidrInput`<sup>Optional</sup> <a name="SubnetCidrInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.subnetCidrInput"></a>

```csharp
public string SubnetCidrInput { get; }
```

- *Type:* string

---

##### `GkeClusterPodIpRange`<sup>Required</sup> <a name="GkeClusterPodIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterPodIpRange"></a>

```csharp
public string GkeClusterPodIpRange { get; }
```

- *Type:* string

---

##### `GkeClusterServiceIpRange`<sup>Required</sup> <a name="GkeClusterServiceIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterServiceIpRange"></a>

```csharp
public string GkeClusterServiceIpRange { get; }
```

- *Type:* string

---

##### `SubnetCidr`<sup>Required</sup> <a name="SubnetCidr" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.subnetCidr"></a>

```csharp
public string SubnetCidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public MwsWorkspacesGcpManagedNetworkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a>

---


### MwsWorkspacesGkeConfigOutputReference <a name="MwsWorkspacesGkeConfigOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsWorkspacesGkeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectivityType` <a name="ResetConnectivityType" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resetConnectivityType"></a>

```csharp
private void ResetConnectivityType()
```

##### `ResetMasterIpRange` <a name="ResetMasterIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resetMasterIpRange"></a>

```csharp
private void ResetMasterIpRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.connectivityTypeInput">ConnectivityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.masterIpRangeInput">MasterIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.connectivityType">ConnectivityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.masterIpRange">MasterIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectivityTypeInput`<sup>Optional</sup> <a name="ConnectivityTypeInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.connectivityTypeInput"></a>

```csharp
public string ConnectivityTypeInput { get; }
```

- *Type:* string

---

##### `MasterIpRangeInput`<sup>Optional</sup> <a name="MasterIpRangeInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.masterIpRangeInput"></a>

```csharp
public string MasterIpRangeInput { get; }
```

- *Type:* string

---

##### `ConnectivityType`<sup>Required</sup> <a name="ConnectivityType" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.connectivityType"></a>

```csharp
public string ConnectivityType { get; }
```

- *Type:* string

---

##### `MasterIpRange`<sup>Required</sup> <a name="MasterIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.masterIpRange"></a>

```csharp
public string MasterIpRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.internalValue"></a>

```csharp
public MwsWorkspacesGkeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a>

---


### MwsWorkspacesTimeoutsOutputReference <a name="MwsWorkspacesTimeoutsOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsWorkspacesTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MwsWorkspacesTokenOutputReference <a name="MwsWorkspacesTokenOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsWorkspacesTokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetLifetimeSeconds` <a name="ResetLifetimeSeconds" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetLifetimeSeconds"></a>

```csharp
private void ResetLifetimeSeconds()
```

##### `ResetTokenId` <a name="ResetTokenId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetTokenId"></a>

```csharp
private void ResetTokenId()
```

##### `ResetTokenValue` <a name="ResetTokenValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetTokenValue"></a>

```csharp
private void ResetTokenValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.lifetimeSecondsInput">LifetimeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenIdInput">TokenIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenValueInput">TokenValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.lifetimeSeconds">LifetimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenId">TokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenValue">TokenValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `LifetimeSecondsInput`<sup>Optional</sup> <a name="LifetimeSecondsInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.lifetimeSecondsInput"></a>

```csharp
public double LifetimeSecondsInput { get; }
```

- *Type:* double

---

##### `TokenIdInput`<sup>Optional</sup> <a name="TokenIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenIdInput"></a>

```csharp
public string TokenIdInput { get; }
```

- *Type:* string

---

##### `TokenValueInput`<sup>Optional</sup> <a name="TokenValueInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenValueInput"></a>

```csharp
public string TokenValueInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `LifetimeSeconds`<sup>Required</sup> <a name="LifetimeSeconds" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.lifetimeSeconds"></a>

```csharp
public double LifetimeSeconds { get; }
```

- *Type:* double

---

##### `TokenId`<sup>Required</sup> <a name="TokenId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenId"></a>

```csharp
public string TokenId { get; }
```

- *Type:* string

---

##### `TokenValue`<sup>Required</sup> <a name="TokenValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenValue"></a>

```csharp
public string TokenValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.internalValue"></a>

```csharp
public MwsWorkspacesToken InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a>

---



