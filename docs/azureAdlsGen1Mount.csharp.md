# `databricks_azure_adls_gen1_mount`

Refer to the Terraform Registory for docs: [`databricks_azure_adls_gen1_mount`](https://registry.terraform.io/providers/databricks/databricks/1.27.0/docs/resources/azure_adls_gen1_mount).

# `azureAdlsGen1Mount` Submodule <a name="`azureAdlsGen1Mount` Submodule" id="@cdktf/provider-databricks.azureAdlsGen1Mount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureAdlsGen1Mount <a name="AzureAdlsGen1Mount" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.27.0/docs/resources/azure_adls_gen1_mount databricks_azure_adls_gen1_mount}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AzureAdlsGen1Mount(Construct Scope, string Id, AzureAdlsGen1MountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig">AzureAdlsGen1MountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig">AzureAdlsGen1MountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetDirectory">ResetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetSparkConfPrefix">ResetSparkConfPrefix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetClusterId` <a name="ResetClusterId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetClusterId"></a>

```csharp
private void ResetClusterId()
```

##### `ResetDirectory` <a name="ResetDirectory" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetDirectory"></a>

```csharp
private void ResetDirectory()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSparkConfPrefix` <a name="ResetSparkConfPrefix" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetSparkConfPrefix"></a>

```csharp
private void ResetSparkConfPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AzureAdlsGen1Mount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AzureAdlsGen1Mount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AzureAdlsGen1Mount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretKeyInput">ClientSecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretScopeInput">ClientSecretScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.directoryInput">DirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.mountNameInput">MountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.sparkConfPrefixInput">SparkConfPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.storageResourceNameInput">StorageResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretKey">ClientSecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretScope">ClientSecretScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.directory">Directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.mountName">MountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.sparkConfPrefix">SparkConfPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.storageResourceName">StorageResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretKeyInput`<sup>Optional</sup> <a name="ClientSecretKeyInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretKeyInput"></a>

```csharp
public string ClientSecretKeyInput { get; }
```

- *Type:* string

---

##### `ClientSecretScopeInput`<sup>Optional</sup> <a name="ClientSecretScopeInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretScopeInput"></a>

```csharp
public string ClientSecretScopeInput { get; }
```

- *Type:* string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.directoryInput"></a>

```csharp
public string DirectoryInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MountNameInput`<sup>Optional</sup> <a name="MountNameInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.mountNameInput"></a>

```csharp
public string MountNameInput { get; }
```

- *Type:* string

---

##### `SparkConfPrefixInput`<sup>Optional</sup> <a name="SparkConfPrefixInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.sparkConfPrefixInput"></a>

```csharp
public string SparkConfPrefixInput { get; }
```

- *Type:* string

---

##### `StorageResourceNameInput`<sup>Optional</sup> <a name="StorageResourceNameInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.storageResourceNameInput"></a>

```csharp
public string StorageResourceNameInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecretKey`<sup>Required</sup> <a name="ClientSecretKey" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretKey"></a>

```csharp
public string ClientSecretKey { get; }
```

- *Type:* string

---

##### `ClientSecretScope`<sup>Required</sup> <a name="ClientSecretScope" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretScope"></a>

```csharp
public string ClientSecretScope { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.directory"></a>

```csharp
public string Directory { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MountName`<sup>Required</sup> <a name="MountName" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.mountName"></a>

```csharp
public string MountName { get; }
```

- *Type:* string

---

##### `SparkConfPrefix`<sup>Required</sup> <a name="SparkConfPrefix" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.sparkConfPrefix"></a>

```csharp
public string SparkConfPrefix { get; }
```

- *Type:* string

---

##### `StorageResourceName`<sup>Required</sup> <a name="StorageResourceName" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.storageResourceName"></a>

```csharp
public string StorageResourceName { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AzureAdlsGen1MountConfig <a name="AzureAdlsGen1MountConfig" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AzureAdlsGen1MountConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClientId,
    string ClientSecretKey,
    string ClientSecretScope,
    string MountName,
    string StorageResourceName,
    string TenantId,
    string ClusterId = null,
    string Directory = null,
    string Id = null,
    string SparkConfPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.27.0/docs/resources/azure_adls_gen1_mount#client_id AzureAdlsGen1Mount#client_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientSecretKey">ClientSecretKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.27.0/docs/resources/azure_adls_gen1_mount#client_secret_key AzureAdlsGen1Mount#client_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientSecretScope">ClientSecretScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.27.0/docs/resources/azure_adls_gen1_mount#client_secret_scope AzureAdlsGen1Mount#client_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.mountName">MountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.27.0/docs/resources/azure_adls_gen1_mount#mount_name AzureAdlsGen1Mount#mount_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.storageResourceName">StorageResourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.27.0/docs/resources/azure_adls_gen1_mount#storage_resource_name AzureAdlsGen1Mount#storage_resource_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.27.0/docs/resources/azure_adls_gen1_mount#tenant_id AzureAdlsGen1Mount#tenant_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.27.0/docs/resources/azure_adls_gen1_mount#cluster_id AzureAdlsGen1Mount#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.directory">Directory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.27.0/docs/resources/azure_adls_gen1_mount#directory AzureAdlsGen1Mount#directory}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.27.0/docs/resources/azure_adls_gen1_mount#id AzureAdlsGen1Mount#id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.sparkConfPrefix">SparkConfPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.27.0/docs/resources/azure_adls_gen1_mount#spark_conf_prefix AzureAdlsGen1Mount#spark_conf_prefix}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.27.0/docs/resources/azure_adls_gen1_mount#client_id AzureAdlsGen1Mount#client_id}.

---

##### `ClientSecretKey`<sup>Required</sup> <a name="ClientSecretKey" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientSecretKey"></a>

```csharp
public string ClientSecretKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.27.0/docs/resources/azure_adls_gen1_mount#client_secret_key AzureAdlsGen1Mount#client_secret_key}.

---

##### `ClientSecretScope`<sup>Required</sup> <a name="ClientSecretScope" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientSecretScope"></a>

```csharp
public string ClientSecretScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.27.0/docs/resources/azure_adls_gen1_mount#client_secret_scope AzureAdlsGen1Mount#client_secret_scope}.

---

##### `MountName`<sup>Required</sup> <a name="MountName" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.mountName"></a>

```csharp
public string MountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.27.0/docs/resources/azure_adls_gen1_mount#mount_name AzureAdlsGen1Mount#mount_name}.

---

##### `StorageResourceName`<sup>Required</sup> <a name="StorageResourceName" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.storageResourceName"></a>

```csharp
public string StorageResourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.27.0/docs/resources/azure_adls_gen1_mount#storage_resource_name AzureAdlsGen1Mount#storage_resource_name}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.27.0/docs/resources/azure_adls_gen1_mount#tenant_id AzureAdlsGen1Mount#tenant_id}.

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.27.0/docs/resources/azure_adls_gen1_mount#cluster_id AzureAdlsGen1Mount#cluster_id}.

---

##### `Directory`<sup>Optional</sup> <a name="Directory" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.directory"></a>

```csharp
public string Directory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.27.0/docs/resources/azure_adls_gen1_mount#directory AzureAdlsGen1Mount#directory}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.27.0/docs/resources/azure_adls_gen1_mount#id AzureAdlsGen1Mount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SparkConfPrefix`<sup>Optional</sup> <a name="SparkConfPrefix" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.sparkConfPrefix"></a>

```csharp
public string SparkConfPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.27.0/docs/resources/azure_adls_gen1_mount#spark_conf_prefix AzureAdlsGen1Mount#spark_conf_prefix}.

---



