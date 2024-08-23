# `storageCredential` Submodule <a name="`storageCredential` Submodule" id="@cdktf/provider-databricks.storageCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageCredential <a name="StorageCredential" id="@cdktf/provider-databricks.storageCredential.StorageCredential"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential databricks_storage_credential}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new StorageCredential(Construct Scope, string Id, StorageCredentialConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig">StorageCredentialConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig">StorageCredentialConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.putAwsIamRole">PutAwsIamRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureManagedIdentity">PutAzureManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureServicePrincipal">PutAzureServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.putCloudflareApiToken">PutCloudflareApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.putDatabricksGcpServiceAccount">PutDatabricksGcpServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.putGcpServiceAccountKey">PutGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetAwsIamRole">ResetAwsIamRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetAzureManagedIdentity">ResetAzureManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetAzureServicePrincipal">ResetAzureServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetCloudflareApiToken">ResetCloudflareApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetDatabricksGcpServiceAccount">ResetDatabricksGcpServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetForceUpdate">ResetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetGcpServiceAccountKey">ResetGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetIsolationMode">ResetIsolationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetSkipValidation">ResetSkipValidation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.storageCredential.StorageCredential.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.storageCredential.StorageCredential.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.storageCredential.StorageCredential.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.storageCredential.StorageCredential.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.storageCredential.StorageCredential.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.storageCredential.StorageCredential.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.storageCredential.StorageCredential.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.storageCredential.StorageCredential.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.storageCredential.StorageCredential.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.storageCredential.StorageCredential.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.storageCredential.StorageCredential.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.storageCredential.StorageCredential.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.storageCredential.StorageCredential.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.storageCredential.StorageCredential.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.storageCredential.StorageCredential.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAwsIamRole` <a name="PutAwsIamRole" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAwsIamRole"></a>

```csharp
private void PutAwsIamRole(StorageCredentialAwsIamRole Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAwsIamRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a>

---

##### `PutAzureManagedIdentity` <a name="PutAzureManagedIdentity" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureManagedIdentity"></a>

```csharp
private void PutAzureManagedIdentity(StorageCredentialAzureManagedIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureManagedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a>

---

##### `PutAzureServicePrincipal` <a name="PutAzureServicePrincipal" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureServicePrincipal"></a>

```csharp
private void PutAzureServicePrincipal(StorageCredentialAzureServicePrincipal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a>

---

##### `PutCloudflareApiToken` <a name="PutCloudflareApiToken" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putCloudflareApiToken"></a>

```csharp
private void PutCloudflareApiToken(StorageCredentialCloudflareApiToken Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putCloudflareApiToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken">StorageCredentialCloudflareApiToken</a>

---

##### `PutDatabricksGcpServiceAccount` <a name="PutDatabricksGcpServiceAccount" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putDatabricksGcpServiceAccount"></a>

```csharp
private void PutDatabricksGcpServiceAccount(StorageCredentialDatabricksGcpServiceAccount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putDatabricksGcpServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount">StorageCredentialDatabricksGcpServiceAccount</a>

---

##### `PutGcpServiceAccountKey` <a name="PutGcpServiceAccountKey" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putGcpServiceAccountKey"></a>

```csharp
private void PutGcpServiceAccountKey(StorageCredentialGcpServiceAccountKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putGcpServiceAccountKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a>

---

##### `ResetAwsIamRole` <a name="ResetAwsIamRole" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetAwsIamRole"></a>

```csharp
private void ResetAwsIamRole()
```

##### `ResetAzureManagedIdentity` <a name="ResetAzureManagedIdentity" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetAzureManagedIdentity"></a>

```csharp
private void ResetAzureManagedIdentity()
```

##### `ResetAzureServicePrincipal` <a name="ResetAzureServicePrincipal" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetAzureServicePrincipal"></a>

```csharp
private void ResetAzureServicePrincipal()
```

##### `ResetCloudflareApiToken` <a name="ResetCloudflareApiToken" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetCloudflareApiToken"></a>

```csharp
private void ResetCloudflareApiToken()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetDatabricksGcpServiceAccount` <a name="ResetDatabricksGcpServiceAccount" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetDatabricksGcpServiceAccount"></a>

```csharp
private void ResetDatabricksGcpServiceAccount()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetForceUpdate` <a name="ResetForceUpdate" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetForceUpdate"></a>

```csharp
private void ResetForceUpdate()
```

##### `ResetGcpServiceAccountKey` <a name="ResetGcpServiceAccountKey" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetGcpServiceAccountKey"></a>

```csharp
private void ResetGcpServiceAccountKey()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsolationMode` <a name="ResetIsolationMode" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetIsolationMode"></a>

```csharp
private void ResetIsolationMode()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetMetastoreId"></a>

```csharp
private void ResetMetastoreId()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```

##### `ResetSkipValidation` <a name="ResetSkipValidation" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetSkipValidation"></a>

```csharp
private void ResetSkipValidation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageCredential resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

StorageCredential.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

StorageCredential.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

StorageCredential.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.storageCredential.StorageCredential.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

StorageCredential.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StorageCredential resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.storageCredential.StorageCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageCredential to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.storageCredential.StorageCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StorageCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.awsIamRole">AwsIamRole</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference">StorageCredentialAwsIamRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureManagedIdentity">AzureManagedIdentity</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference">StorageCredentialAzureManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureServicePrincipal">AzureServicePrincipal</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference">StorageCredentialAzureServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.cloudflareApiToken">CloudflareApiToken</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference">StorageCredentialCloudflareApiTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.databricksGcpServiceAccount">DatabricksGcpServiceAccount</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference">StorageCredentialDatabricksGcpServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.gcpServiceAccountKey">GcpServiceAccountKey</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference">StorageCredentialGcpServiceAccountKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.storageCredentialId">StorageCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.awsIamRoleInput">AwsIamRoleInput</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureManagedIdentityInput">AzureManagedIdentityInput</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureServicePrincipalInput">AzureServicePrincipalInput</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.cloudflareApiTokenInput">CloudflareApiTokenInput</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken">StorageCredentialCloudflareApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.databricksGcpServiceAccountInput">DatabricksGcpServiceAccountInput</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount">StorageCredentialDatabricksGcpServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.forceUpdateInput">ForceUpdateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.gcpServiceAccountKeyInput">GcpServiceAccountKeyInput</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.isolationModeInput">IsolationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.skipValidationInput">SkipValidationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.forceUpdate">ForceUpdate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.isolationMode">IsolationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.metastoreId">MetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.skipValidation">SkipValidation</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AwsIamRole`<sup>Required</sup> <a name="AwsIamRole" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.awsIamRole"></a>

```csharp
public StorageCredentialAwsIamRoleOutputReference AwsIamRole { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference">StorageCredentialAwsIamRoleOutputReference</a>

---

##### `AzureManagedIdentity`<sup>Required</sup> <a name="AzureManagedIdentity" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureManagedIdentity"></a>

```csharp
public StorageCredentialAzureManagedIdentityOutputReference AzureManagedIdentity { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference">StorageCredentialAzureManagedIdentityOutputReference</a>

---

##### `AzureServicePrincipal`<sup>Required</sup> <a name="AzureServicePrincipal" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureServicePrincipal"></a>

```csharp
public StorageCredentialAzureServicePrincipalOutputReference AzureServicePrincipal { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference">StorageCredentialAzureServicePrincipalOutputReference</a>

---

##### `CloudflareApiToken`<sup>Required</sup> <a name="CloudflareApiToken" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.cloudflareApiToken"></a>

```csharp
public StorageCredentialCloudflareApiTokenOutputReference CloudflareApiToken { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference">StorageCredentialCloudflareApiTokenOutputReference</a>

---

##### `DatabricksGcpServiceAccount`<sup>Required</sup> <a name="DatabricksGcpServiceAccount" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.databricksGcpServiceAccount"></a>

```csharp
public StorageCredentialDatabricksGcpServiceAccountOutputReference DatabricksGcpServiceAccount { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference">StorageCredentialDatabricksGcpServiceAccountOutputReference</a>

---

##### `GcpServiceAccountKey`<sup>Required</sup> <a name="GcpServiceAccountKey" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.gcpServiceAccountKey"></a>

```csharp
public StorageCredentialGcpServiceAccountKeyOutputReference GcpServiceAccountKey { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference">StorageCredentialGcpServiceAccountKeyOutputReference</a>

---

##### `StorageCredentialId`<sup>Required</sup> <a name="StorageCredentialId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.storageCredentialId"></a>

```csharp
public string StorageCredentialId { get; }
```

- *Type:* string

---

##### `AwsIamRoleInput`<sup>Optional</sup> <a name="AwsIamRoleInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.awsIamRoleInput"></a>

```csharp
public StorageCredentialAwsIamRole AwsIamRoleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a>

---

##### `AzureManagedIdentityInput`<sup>Optional</sup> <a name="AzureManagedIdentityInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureManagedIdentityInput"></a>

```csharp
public StorageCredentialAzureManagedIdentity AzureManagedIdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a>

---

##### `AzureServicePrincipalInput`<sup>Optional</sup> <a name="AzureServicePrincipalInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureServicePrincipalInput"></a>

```csharp
public StorageCredentialAzureServicePrincipal AzureServicePrincipalInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a>

---

##### `CloudflareApiTokenInput`<sup>Optional</sup> <a name="CloudflareApiTokenInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.cloudflareApiTokenInput"></a>

```csharp
public StorageCredentialCloudflareApiToken CloudflareApiTokenInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken">StorageCredentialCloudflareApiToken</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DatabricksGcpServiceAccountInput`<sup>Optional</sup> <a name="DatabricksGcpServiceAccountInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.databricksGcpServiceAccountInput"></a>

```csharp
public StorageCredentialDatabricksGcpServiceAccount DatabricksGcpServiceAccountInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount">StorageCredentialDatabricksGcpServiceAccount</a>

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.forceDestroyInput"></a>

```csharp
public object ForceDestroyInput { get; }
```

- *Type:* object

---

##### `ForceUpdateInput`<sup>Optional</sup> <a name="ForceUpdateInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.forceUpdateInput"></a>

```csharp
public object ForceUpdateInput { get; }
```

- *Type:* object

---

##### `GcpServiceAccountKeyInput`<sup>Optional</sup> <a name="GcpServiceAccountKeyInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.gcpServiceAccountKeyInput"></a>

```csharp
public StorageCredentialGcpServiceAccountKey GcpServiceAccountKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsolationModeInput`<sup>Optional</sup> <a name="IsolationModeInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.isolationModeInput"></a>

```csharp
public string IsolationModeInput { get; }
```

- *Type:* string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.metastoreIdInput"></a>

```csharp
public string MetastoreIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `SkipValidationInput`<sup>Optional</sup> <a name="SkipValidationInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.skipValidationInput"></a>

```csharp
public object SkipValidationInput { get; }
```

- *Type:* object

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; }
```

- *Type:* object

---

##### `ForceUpdate`<sup>Required</sup> <a name="ForceUpdate" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.forceUpdate"></a>

```csharp
public object ForceUpdate { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsolationMode`<sup>Required</sup> <a name="IsolationMode" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.isolationMode"></a>

```csharp
public string IsolationMode { get; }
```

- *Type:* string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.metastoreId"></a>

```csharp
public string MetastoreId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `SkipValidation`<sup>Required</sup> <a name="SkipValidation" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.skipValidation"></a>

```csharp
public object SkipValidation { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageCredentialAwsIamRole <a name="StorageCredentialAwsIamRole" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new StorageCredentialAwsIamRole {
    string RoleArn,
    string ExternalId = null,
    string UnityCatalogIamArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#role_arn StorageCredential#role_arn}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#external_id StorageCredential#external_id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole.property.unityCatalogIamArn">UnityCatalogIamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#unity_catalog_iam_arn StorageCredential#unity_catalog_iam_arn}. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#role_arn StorageCredential#role_arn}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#external_id StorageCredential#external_id}.

---

##### `UnityCatalogIamArn`<sup>Optional</sup> <a name="UnityCatalogIamArn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole.property.unityCatalogIamArn"></a>

```csharp
public string UnityCatalogIamArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#unity_catalog_iam_arn StorageCredential#unity_catalog_iam_arn}.

---

### StorageCredentialAzureManagedIdentity <a name="StorageCredentialAzureManagedIdentity" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new StorageCredentialAzureManagedIdentity {
    string AccessConnectorId,
    string CredentialId = null,
    string ManagedIdentityId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity.property.accessConnectorId">AccessConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#access_connector_id StorageCredential#access_connector_id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity.property.credentialId">CredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#credential_id StorageCredential#credential_id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity.property.managedIdentityId">ManagedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#managed_identity_id StorageCredential#managed_identity_id}. |

---

##### `AccessConnectorId`<sup>Required</sup> <a name="AccessConnectorId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity.property.accessConnectorId"></a>

```csharp
public string AccessConnectorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#access_connector_id StorageCredential#access_connector_id}.

---

##### `CredentialId`<sup>Optional</sup> <a name="CredentialId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity.property.credentialId"></a>

```csharp
public string CredentialId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#credential_id StorageCredential#credential_id}.

---

##### `ManagedIdentityId`<sup>Optional</sup> <a name="ManagedIdentityId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity.property.managedIdentityId"></a>

```csharp
public string ManagedIdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#managed_identity_id StorageCredential#managed_identity_id}.

---

### StorageCredentialAzureServicePrincipal <a name="StorageCredentialAzureServicePrincipal" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new StorageCredentialAzureServicePrincipal {
    string ApplicationId,
    string ClientSecret,
    string DirectoryId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.applicationId">ApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#application_id StorageCredential#application_id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#client_secret StorageCredential#client_secret}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.directoryId">DirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#directory_id StorageCredential#directory_id}. |

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#application_id StorageCredential#application_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#client_secret StorageCredential#client_secret}.

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.directoryId"></a>

```csharp
public string DirectoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#directory_id StorageCredential#directory_id}.

---

### StorageCredentialCloudflareApiToken <a name="StorageCredentialCloudflareApiToken" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new StorageCredentialCloudflareApiToken {
    string AccessKeyId,
    string AccountId,
    string SecretAccessKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#access_key_id StorageCredential#access_key_id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#account_id StorageCredential#account_id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#secret_access_key StorageCredential#secret_access_key}. |

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#access_key_id StorageCredential#access_key_id}.

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#account_id StorageCredential#account_id}.

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#secret_access_key StorageCredential#secret_access_key}.

---

### StorageCredentialConfig <a name="StorageCredentialConfig" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new StorageCredentialConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    StorageCredentialAwsIamRole AwsIamRole = null,
    StorageCredentialAzureManagedIdentity AzureManagedIdentity = null,
    StorageCredentialAzureServicePrincipal AzureServicePrincipal = null,
    StorageCredentialCloudflareApiToken CloudflareApiToken = null,
    string Comment = null,
    StorageCredentialDatabricksGcpServiceAccount DatabricksGcpServiceAccount = null,
    object ForceDestroy = null,
    object ForceUpdate = null,
    StorageCredentialGcpServiceAccountKey GcpServiceAccountKey = null,
    string Id = null,
    string IsolationMode = null,
    string MetastoreId = null,
    string Owner = null,
    object ReadOnly = null,
    object SkipValidation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#name StorageCredential#name}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.awsIamRole">AwsIamRole</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a></code> | aws_iam_role block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.azureManagedIdentity">AzureManagedIdentity</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a></code> | azure_managed_identity block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.azureServicePrincipal">AzureServicePrincipal</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a></code> | azure_service_principal block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.cloudflareApiToken">CloudflareApiToken</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken">StorageCredentialCloudflareApiToken</a></code> | cloudflare_api_token block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#comment StorageCredential#comment}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.databricksGcpServiceAccount">DatabricksGcpServiceAccount</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount">StorageCredentialDatabricksGcpServiceAccount</a></code> | databricks_gcp_service_account block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#force_destroy StorageCredential#force_destroy}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.forceUpdate">ForceUpdate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#force_update StorageCredential#force_update}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.gcpServiceAccountKey">GcpServiceAccountKey</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a></code> | gcp_service_account_key block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#id StorageCredential#id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.isolationMode">IsolationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#isolation_mode StorageCredential#isolation_mode}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.metastoreId">MetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#metastore_id StorageCredential#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#owner StorageCredential#owner}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.readOnly">ReadOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#read_only StorageCredential#read_only}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.skipValidation">SkipValidation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#skip_validation StorageCredential#skip_validation}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#name StorageCredential#name}.

---

##### `AwsIamRole`<sup>Optional</sup> <a name="AwsIamRole" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.awsIamRole"></a>

```csharp
public StorageCredentialAwsIamRole AwsIamRole { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a>

aws_iam_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#aws_iam_role StorageCredential#aws_iam_role}

---

##### `AzureManagedIdentity`<sup>Optional</sup> <a name="AzureManagedIdentity" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.azureManagedIdentity"></a>

```csharp
public StorageCredentialAzureManagedIdentity AzureManagedIdentity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a>

azure_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#azure_managed_identity StorageCredential#azure_managed_identity}

---

##### `AzureServicePrincipal`<sup>Optional</sup> <a name="AzureServicePrincipal" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.azureServicePrincipal"></a>

```csharp
public StorageCredentialAzureServicePrincipal AzureServicePrincipal { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a>

azure_service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#azure_service_principal StorageCredential#azure_service_principal}

---

##### `CloudflareApiToken`<sup>Optional</sup> <a name="CloudflareApiToken" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.cloudflareApiToken"></a>

```csharp
public StorageCredentialCloudflareApiToken CloudflareApiToken { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken">StorageCredentialCloudflareApiToken</a>

cloudflare_api_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#cloudflare_api_token StorageCredential#cloudflare_api_token}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#comment StorageCredential#comment}.

---

##### `DatabricksGcpServiceAccount`<sup>Optional</sup> <a name="DatabricksGcpServiceAccount" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.databricksGcpServiceAccount"></a>

```csharp
public StorageCredentialDatabricksGcpServiceAccount DatabricksGcpServiceAccount { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount">StorageCredentialDatabricksGcpServiceAccount</a>

databricks_gcp_service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#databricks_gcp_service_account StorageCredential#databricks_gcp_service_account}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#force_destroy StorageCredential#force_destroy}.

---

##### `ForceUpdate`<sup>Optional</sup> <a name="ForceUpdate" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.forceUpdate"></a>

```csharp
public object ForceUpdate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#force_update StorageCredential#force_update}.

---

##### `GcpServiceAccountKey`<sup>Optional</sup> <a name="GcpServiceAccountKey" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.gcpServiceAccountKey"></a>

```csharp
public StorageCredentialGcpServiceAccountKey GcpServiceAccountKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a>

gcp_service_account_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#gcp_service_account_key StorageCredential#gcp_service_account_key}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#id StorageCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsolationMode`<sup>Optional</sup> <a name="IsolationMode" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.isolationMode"></a>

```csharp
public string IsolationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#isolation_mode StorageCredential#isolation_mode}.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.metastoreId"></a>

```csharp
public string MetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#metastore_id StorageCredential#metastore_id}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#owner StorageCredential#owner}.

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#read_only StorageCredential#read_only}.

---

##### `SkipValidation`<sup>Optional</sup> <a name="SkipValidation" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.skipValidation"></a>

```csharp
public object SkipValidation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#skip_validation StorageCredential#skip_validation}.

---

### StorageCredentialDatabricksGcpServiceAccount <a name="StorageCredentialDatabricksGcpServiceAccount" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new StorageCredentialDatabricksGcpServiceAccount {
    string CredentialId = null,
    string Email = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount.property.credentialId">CredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#credential_id StorageCredential#credential_id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#email StorageCredential#email}. |

---

##### `CredentialId`<sup>Optional</sup> <a name="CredentialId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount.property.credentialId"></a>

```csharp
public string CredentialId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#credential_id StorageCredential#credential_id}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#email StorageCredential#email}.

---

### StorageCredentialGcpServiceAccountKey <a name="StorageCredentialGcpServiceAccountKey" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new StorageCredentialGcpServiceAccountKey {
    string Email,
    string PrivateKey,
    string PrivateKeyId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#email StorageCredential#email}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.privateKey">PrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#private_key StorageCredential#private_key}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.privateKeyId">PrivateKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#private_key_id StorageCredential#private_key_id}. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#email StorageCredential#email}.

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#private_key StorageCredential#private_key}.

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.privateKeyId"></a>

```csharp
public string PrivateKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/storage_credential#private_key_id StorageCredential#private_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageCredentialAwsIamRoleOutputReference <a name="StorageCredentialAwsIamRoleOutputReference" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new StorageCredentialAwsIamRoleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.resetUnityCatalogIamArn">ResetUnityCatalogIamArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetUnityCatalogIamArn` <a name="ResetUnityCatalogIamArn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.resetUnityCatalogIamArn"></a>

```csharp
private void ResetUnityCatalogIamArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.unityCatalogIamArnInput">UnityCatalogIamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.unityCatalogIamArn">UnityCatalogIamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `UnityCatalogIamArnInput`<sup>Optional</sup> <a name="UnityCatalogIamArnInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.unityCatalogIamArnInput"></a>

```csharp
public string UnityCatalogIamArnInput { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `UnityCatalogIamArn`<sup>Required</sup> <a name="UnityCatalogIamArn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.unityCatalogIamArn"></a>

```csharp
public string UnityCatalogIamArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.internalValue"></a>

```csharp
public StorageCredentialAwsIamRole InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a>

---


### StorageCredentialAzureManagedIdentityOutputReference <a name="StorageCredentialAzureManagedIdentityOutputReference" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new StorageCredentialAzureManagedIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.resetCredentialId">ResetCredentialId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.resetManagedIdentityId">ResetManagedIdentityId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCredentialId` <a name="ResetCredentialId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.resetCredentialId"></a>

```csharp
private void ResetCredentialId()
```

##### `ResetManagedIdentityId` <a name="ResetManagedIdentityId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.resetManagedIdentityId"></a>

```csharp
private void ResetManagedIdentityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.accessConnectorIdInput">AccessConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.credentialIdInput">CredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.managedIdentityIdInput">ManagedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.accessConnectorId">AccessConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.credentialId">CredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.managedIdentityId">ManagedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessConnectorIdInput`<sup>Optional</sup> <a name="AccessConnectorIdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.accessConnectorIdInput"></a>

```csharp
public string AccessConnectorIdInput { get; }
```

- *Type:* string

---

##### `CredentialIdInput`<sup>Optional</sup> <a name="CredentialIdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.credentialIdInput"></a>

```csharp
public string CredentialIdInput { get; }
```

- *Type:* string

---

##### `ManagedIdentityIdInput`<sup>Optional</sup> <a name="ManagedIdentityIdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.managedIdentityIdInput"></a>

```csharp
public string ManagedIdentityIdInput { get; }
```

- *Type:* string

---

##### `AccessConnectorId`<sup>Required</sup> <a name="AccessConnectorId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.accessConnectorId"></a>

```csharp
public string AccessConnectorId { get; }
```

- *Type:* string

---

##### `CredentialId`<sup>Required</sup> <a name="CredentialId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.credentialId"></a>

```csharp
public string CredentialId { get; }
```

- *Type:* string

---

##### `ManagedIdentityId`<sup>Required</sup> <a name="ManagedIdentityId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.managedIdentityId"></a>

```csharp
public string ManagedIdentityId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.internalValue"></a>

```csharp
public StorageCredentialAzureManagedIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a>

---


### StorageCredentialAzureServicePrincipalOutputReference <a name="StorageCredentialAzureServicePrincipalOutputReference" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new StorageCredentialAzureServicePrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.directoryIdInput">DirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.directoryIdInput"></a>

```csharp
public string DirectoryIdInput { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.internalValue"></a>

```csharp
public StorageCredentialAzureServicePrincipal InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a>

---


### StorageCredentialCloudflareApiTokenOutputReference <a name="StorageCredentialCloudflareApiTokenOutputReference" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new StorageCredentialCloudflareApiTokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken">StorageCredentialCloudflareApiToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.accessKeyIdInput"></a>

```csharp
public string AccessKeyIdInput { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.secretAccessKeyInput"></a>

```csharp
public string SecretAccessKeyInput { get; }
```

- *Type:* string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.internalValue"></a>

```csharp
public StorageCredentialCloudflareApiToken InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken">StorageCredentialCloudflareApiToken</a>

---


### StorageCredentialDatabricksGcpServiceAccountOutputReference <a name="StorageCredentialDatabricksGcpServiceAccountOutputReference" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new StorageCredentialDatabricksGcpServiceAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.resetCredentialId">ResetCredentialId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCredentialId` <a name="ResetCredentialId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.resetCredentialId"></a>

```csharp
private void ResetCredentialId()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.credentialIdInput">CredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.credentialId">CredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount">StorageCredentialDatabricksGcpServiceAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialIdInput`<sup>Optional</sup> <a name="CredentialIdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.credentialIdInput"></a>

```csharp
public string CredentialIdInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `CredentialId`<sup>Required</sup> <a name="CredentialId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.credentialId"></a>

```csharp
public string CredentialId { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.internalValue"></a>

```csharp
public StorageCredentialDatabricksGcpServiceAccount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount">StorageCredentialDatabricksGcpServiceAccount</a>

---


### StorageCredentialGcpServiceAccountKeyOutputReference <a name="StorageCredentialGcpServiceAccountKeyOutputReference" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new StorageCredentialGcpServiceAccountKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyIdInput">PrivateKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyId">PrivateKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `PrivateKeyIdInput`<sup>Optional</sup> <a name="PrivateKeyIdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyIdInput"></a>

```csharp
public string PrivateKeyIdInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyId"></a>

```csharp
public string PrivateKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.internalValue"></a>

```csharp
public StorageCredentialGcpServiceAccountKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a>

---



