# `dataDatabricksExternalMetadata` Submodule <a name="`dataDatabricksExternalMetadata` Submodule" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksExternalMetadata <a name="DataDatabricksExternalMetadata" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata databricks_external_metadata}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksexternalmetadata"

datadatabricksexternalmetadata.NewDataDatabricksExternalMetadata(scope Construct, id *string, config DataDatabricksExternalMetadataConfig) DataDatabricksExternalMetadata
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig">DataDatabricksExternalMetadataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig">DataDatabricksExternalMetadataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetColumns">ResetColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetColumns` <a name="ResetColumns" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetColumns"></a>

```go
func ResetColumns()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetUrl"></a>

```go
func ResetUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksExternalMetadata resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksexternalmetadata"

datadatabricksexternalmetadata.DataDatabricksExternalMetadata_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksexternalmetadata"

datadatabricksexternalmetadata.DataDatabricksExternalMetadata_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksexternalmetadata"

datadatabricksexternalmetadata.DataDatabricksExternalMetadata_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksexternalmetadata"

datadatabricksexternalmetadata.DataDatabricksExternalMetadata_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksExternalMetadata resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksExternalMetadata to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksExternalMetadata that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksExternalMetadata to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.columnsInput">ColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.entityTypeInput">EntityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.systemTypeInput">SystemTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.columns">Columns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.systemType">SystemType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.url">Url</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.metastoreId"></a>

```go
func MetastoreId() *string
```

- *Type:* *string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.columnsInput"></a>

```go
func ColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.entityTypeInput"></a>

```go
func EntityTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SystemTypeInput`<sup>Optional</sup> <a name="SystemTypeInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.systemTypeInput"></a>

```go
func SystemTypeInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.columns"></a>

```go
func Columns() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SystemType`<sup>Required</sup> <a name="SystemType" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.systemType"></a>

```go
func SystemType() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksExternalMetadataConfig <a name="DataDatabricksExternalMetadataConfig" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksexternalmetadata"

&datadatabricksexternalmetadata.DataDatabricksExternalMetadataConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EntityType: *string,
	Name: *string,
	SystemType: *string,
	Columns: *[]*string,
	Description: *string,
	Owner: *string,
	Properties: *map[string]*string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.entityType">EntityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#entity_type DataDatabricksExternalMetadata#entity_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#name DataDatabricksExternalMetadata#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.systemType">SystemType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#system_type DataDatabricksExternalMetadata#system_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.columns">Columns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#columns DataDatabricksExternalMetadata#columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#description DataDatabricksExternalMetadata#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#owner DataDatabricksExternalMetadata#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.properties">Properties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#properties DataDatabricksExternalMetadata#properties}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#url DataDatabricksExternalMetadata#url}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.entityType"></a>

```go
EntityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#entity_type DataDatabricksExternalMetadata#entity_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#name DataDatabricksExternalMetadata#name}.

---

##### `SystemType`<sup>Required</sup> <a name="SystemType" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.systemType"></a>

```go
SystemType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#system_type DataDatabricksExternalMetadata#system_type}.

---

##### `Columns`<sup>Optional</sup> <a name="Columns" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.columns"></a>

```go
Columns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#columns DataDatabricksExternalMetadata#columns}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#description DataDatabricksExternalMetadata#description}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#owner DataDatabricksExternalMetadata#owner}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#properties DataDatabricksExternalMetadata#properties}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadata#url DataDatabricksExternalMetadata#url}.

---



