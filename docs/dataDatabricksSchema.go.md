# `dataDatabricksSchema` Submodule <a name="`dataDatabricksSchema` Submodule" id="@cdktf/provider-databricks.dataDatabricksSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSchema <a name="DataDatabricksSchema" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema databricks_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksschema"

datadatabricksschema.NewDataDatabricksSchema(scope Construct, id *string, config DataDatabricksSchemaConfig) DataDatabricksSchema
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig">DataDatabricksSchemaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig">DataDatabricksSchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo">PutSchemaInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetSchemaInfo">ResetSchemaInfo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSchemaInfo` <a name="PutSchemaInfo" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo"></a>

```go
func PutSchemaInfo(value DataDatabricksSchemaSchemaInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetId"></a>

```go
func ResetId()
```

##### `ResetSchemaInfo` <a name="ResetSchemaInfo" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetSchemaInfo"></a>

```go
func ResetSchemaInfo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksSchema resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksschema"

datadatabricksschema.DataDatabricksSchema_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksschema"

datadatabricksschema.DataDatabricksSchema_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksschema"

datadatabricksschema.DataDatabricksSchema_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksschema"

datadatabricksschema.DataDatabricksSchema_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksSchema resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksSchema to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksSchema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksSchema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.schemaInfo">SchemaInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference">DataDatabricksSchemaSchemaInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.schemaInfoInput">SchemaInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `SchemaInfo`<sup>Required</sup> <a name="SchemaInfo" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.schemaInfo"></a>

```go
func SchemaInfo() DataDatabricksSchemaSchemaInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference">DataDatabricksSchemaSchemaInfoOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchemaInfoInput`<sup>Optional</sup> <a name="SchemaInfoInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.schemaInfoInput"></a>

```go
func SchemaInfoInput() DataDatabricksSchemaSchemaInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSchemaConfig <a name="DataDatabricksSchemaConfig" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksschema"

&datadatabricksschema.DataDatabricksSchemaConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	SchemaInfo: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#name DataDatabricksSchema#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#id DataDatabricksSchema#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.schemaInfo">SchemaInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a></code> | schema_info block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#name DataDatabricksSchema#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#id DataDatabricksSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SchemaInfo`<sup>Optional</sup> <a name="SchemaInfo" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.schemaInfo"></a>

```go
SchemaInfo DataDatabricksSchemaSchemaInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a>

schema_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#schema_info DataDatabricksSchema#schema_info}

---

### DataDatabricksSchemaSchemaInfo <a name="DataDatabricksSchemaSchemaInfo" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksschema"

&datadatabricksschema.DataDatabricksSchemaSchemaInfo {
	BrowseOnly: interface{},
	CatalogName: *string,
	CatalogType: *string,
	Comment: *string,
	CreatedAt: *f64,
	CreatedBy: *string,
	EffectivePredictiveOptimizationFlag: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag,
	EnablePredictiveOptimization: *string,
	FullName: *string,
	MetastoreId: *string,
	Name: *string,
	Owner: *string,
	Properties: *map[string]*string,
	SchemaId: *string,
	StorageLocation: *string,
	StorageRoot: *string,
	UpdatedAt: *f64,
	UpdatedBy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.browseOnly">BrowseOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#browse_only DataDatabricksSchema#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#catalog_name DataDatabricksSchema#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.catalogType">CatalogType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#catalog_type DataDatabricksSchema#catalog_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#comment DataDatabricksSchema#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#created_at DataDatabricksSchema#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.createdBy">CreatedBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#created_by DataDatabricksSchema#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.effectivePredictiveOptimizationFlag">EffectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a></code> | effective_predictive_optimization_flag block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.enablePredictiveOptimization">EnablePredictiveOptimization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#enable_predictive_optimization DataDatabricksSchema#enable_predictive_optimization}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.fullName">FullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#full_name DataDatabricksSchema#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#metastore_id DataDatabricksSchema#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#name DataDatabricksSchema#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#owner DataDatabricksSchema#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.properties">Properties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#properties DataDatabricksSchema#properties}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.schemaId">SchemaId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#schema_id DataDatabricksSchema#schema_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.storageLocation">StorageLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#storage_location DataDatabricksSchema#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.storageRoot">StorageRoot</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#storage_root DataDatabricksSchema#storage_root}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#updated_at DataDatabricksSchema#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#updated_by DataDatabricksSchema#updated_by}. |

---

##### `BrowseOnly`<sup>Optional</sup> <a name="BrowseOnly" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.browseOnly"></a>

```go
BrowseOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#browse_only DataDatabricksSchema#browse_only}.

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#catalog_name DataDatabricksSchema#catalog_name}.

---

##### `CatalogType`<sup>Optional</sup> <a name="CatalogType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.catalogType"></a>

```go
CatalogType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#catalog_type DataDatabricksSchema#catalog_type}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#comment DataDatabricksSchema#comment}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.createdAt"></a>

```go
CreatedAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#created_at DataDatabricksSchema#created_at}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.createdBy"></a>

```go
CreatedBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#created_by DataDatabricksSchema#created_by}.

---

##### `EffectivePredictiveOptimizationFlag`<sup>Optional</sup> <a name="EffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.effectivePredictiveOptimizationFlag"></a>

```go
EffectivePredictiveOptimizationFlag DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a>

effective_predictive_optimization_flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#effective_predictive_optimization_flag DataDatabricksSchema#effective_predictive_optimization_flag}

---

##### `EnablePredictiveOptimization`<sup>Optional</sup> <a name="EnablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.enablePredictiveOptimization"></a>

```go
EnablePredictiveOptimization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#enable_predictive_optimization DataDatabricksSchema#enable_predictive_optimization}.

---

##### `FullName`<sup>Optional</sup> <a name="FullName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.fullName"></a>

```go
FullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#full_name DataDatabricksSchema#full_name}.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.metastoreId"></a>

```go
MetastoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#metastore_id DataDatabricksSchema#metastore_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#name DataDatabricksSchema#name}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#owner DataDatabricksSchema#owner}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#properties DataDatabricksSchema#properties}.

---

##### `SchemaId`<sup>Optional</sup> <a name="SchemaId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.schemaId"></a>

```go
SchemaId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#schema_id DataDatabricksSchema#schema_id}.

---

##### `StorageLocation`<sup>Optional</sup> <a name="StorageLocation" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.storageLocation"></a>

```go
StorageLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#storage_location DataDatabricksSchema#storage_location}.

---

##### `StorageRoot`<sup>Optional</sup> <a name="StorageRoot" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.storageRoot"></a>

```go
StorageRoot *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#storage_root DataDatabricksSchema#storage_root}.

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.updatedAt"></a>

```go
UpdatedAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#updated_at DataDatabricksSchema#updated_at}.

---

##### `UpdatedBy`<sup>Optional</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.updatedBy"></a>

```go
UpdatedBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#updated_by DataDatabricksSchema#updated_by}.

---

### DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag <a name="DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksschema"

&datadatabricksschema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag {
	Value: *string,
	InheritedFromName: *string,
	InheritedFromType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#value DataDatabricksSchema#value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.inheritedFromName">InheritedFromName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#inherited_from_name DataDatabricksSchema#inherited_from_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.inheritedFromType">InheritedFromType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#inherited_from_type DataDatabricksSchema#inherited_from_type}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#value DataDatabricksSchema#value}.

---

##### `InheritedFromName`<sup>Optional</sup> <a name="InheritedFromName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.inheritedFromName"></a>

```go
InheritedFromName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#inherited_from_name DataDatabricksSchema#inherited_from_name}.

---

##### `InheritedFromType`<sup>Optional</sup> <a name="InheritedFromType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.inheritedFromType"></a>

```go
InheritedFromType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/schema#inherited_from_type DataDatabricksSchema#inherited_from_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference <a name="DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksschema"

datadatabricksschema.NewDataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName">ResetInheritedFromName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType">ResetInheritedFromType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInheritedFromName` <a name="ResetInheritedFromName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName"></a>

```go
func ResetInheritedFromName()
```

##### `ResetInheritedFromType` <a name="ResetInheritedFromType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType"></a>

```go
func ResetInheritedFromType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput">InheritedFromNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput">InheritedFromTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName">InheritedFromName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType">InheritedFromType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InheritedFromNameInput`<sup>Optional</sup> <a name="InheritedFromNameInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput"></a>

```go
func InheritedFromNameInput() *string
```

- *Type:* *string

---

##### `InheritedFromTypeInput`<sup>Optional</sup> <a name="InheritedFromTypeInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput"></a>

```go
func InheritedFromTypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `InheritedFromName`<sup>Required</sup> <a name="InheritedFromName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName"></a>

```go
func InheritedFromName() *string
```

- *Type:* *string

---

##### `InheritedFromType`<sup>Required</sup> <a name="InheritedFromType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType"></a>

```go
func InheritedFromType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a>

---


### DataDatabricksSchemaSchemaInfoOutputReference <a name="DataDatabricksSchemaSchemaInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksschema"

datadatabricksschema.NewDataDatabricksSchemaSchemaInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksSchemaSchemaInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.putEffectivePredictiveOptimizationFlag">PutEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetBrowseOnly">ResetBrowseOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCatalogType">ResetCatalogType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetEffectivePredictiveOptimizationFlag">ResetEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetEnablePredictiveOptimization">ResetEnablePredictiveOptimization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetFullName">ResetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetSchemaId">ResetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetStorageLocation">ResetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetStorageRoot">ResetStorageRoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetUpdatedBy">ResetUpdatedBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEffectivePredictiveOptimizationFlag` <a name="PutEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.putEffectivePredictiveOptimizationFlag"></a>

```go
func PutEffectivePredictiveOptimizationFlag(value DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.putEffectivePredictiveOptimizationFlag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a>

---

##### `ResetBrowseOnly` <a name="ResetBrowseOnly" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetBrowseOnly"></a>

```go
func ResetBrowseOnly()
```

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCatalogName"></a>

```go
func ResetCatalogName()
```

##### `ResetCatalogType` <a name="ResetCatalogType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCatalogType"></a>

```go
func ResetCatalogType()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCreatedAt"></a>

```go
func ResetCreatedAt()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCreatedBy"></a>

```go
func ResetCreatedBy()
```

##### `ResetEffectivePredictiveOptimizationFlag` <a name="ResetEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetEffectivePredictiveOptimizationFlag"></a>

```go
func ResetEffectivePredictiveOptimizationFlag()
```

##### `ResetEnablePredictiveOptimization` <a name="ResetEnablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetEnablePredictiveOptimization"></a>

```go
func ResetEnablePredictiveOptimization()
```

##### `ResetFullName` <a name="ResetFullName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetFullName"></a>

```go
func ResetFullName()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetMetastoreId"></a>

```go
func ResetMetastoreId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetSchemaId` <a name="ResetSchemaId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetSchemaId"></a>

```go
func ResetSchemaId()
```

##### `ResetStorageLocation` <a name="ResetStorageLocation" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetStorageLocation"></a>

```go
func ResetStorageLocation()
```

##### `ResetStorageRoot` <a name="ResetStorageRoot" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetStorageRoot"></a>

```go
func ResetStorageRoot()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetUpdatedAt"></a>

```go
func ResetUpdatedAt()
```

##### `ResetUpdatedBy` <a name="ResetUpdatedBy" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetUpdatedBy"></a>

```go
func ResetUpdatedBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.effectivePredictiveOptimizationFlag">EffectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.browseOnlyInput">BrowseOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogTypeInput">CatalogTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdAtInput">CreatedAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdByInput">CreatedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.effectivePredictiveOptimizationFlagInput">EffectivePredictiveOptimizationFlagInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.enablePredictiveOptimizationInput">EnablePredictiveOptimizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fullNameInput">FullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.schemaIdInput">SchemaIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageLocationInput">StorageLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageRootInput">StorageRootInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedAtInput">UpdatedAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedByInput">UpdatedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.browseOnly">BrowseOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogType">CatalogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.enablePredictiveOptimization">EnablePredictiveOptimization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fullName">FullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.schemaId">SchemaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageLocation">StorageLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageRoot">StorageRoot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectivePredictiveOptimizationFlag`<sup>Required</sup> <a name="EffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.effectivePredictiveOptimizationFlag"></a>

```go
func EffectivePredictiveOptimizationFlag() DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference</a>

---

##### `BrowseOnlyInput`<sup>Optional</sup> <a name="BrowseOnlyInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.browseOnlyInput"></a>

```go
func BrowseOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `CatalogTypeInput`<sup>Optional</sup> <a name="CatalogTypeInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogTypeInput"></a>

```go
func CatalogTypeInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdAtInput"></a>

```go
func CreatedAtInput() *f64
```

- *Type:* *f64

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdByInput"></a>

```go
func CreatedByInput() *string
```

- *Type:* *string

---

##### `EffectivePredictiveOptimizationFlagInput`<sup>Optional</sup> <a name="EffectivePredictiveOptimizationFlagInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.effectivePredictiveOptimizationFlagInput"></a>

```go
func EffectivePredictiveOptimizationFlagInput() DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a>

---

##### `EnablePredictiveOptimizationInput`<sup>Optional</sup> <a name="EnablePredictiveOptimizationInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.enablePredictiveOptimizationInput"></a>

```go
func EnablePredictiveOptimizationInput() *string
```

- *Type:* *string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fullNameInput"></a>

```go
func FullNameInput() *string
```

- *Type:* *string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.metastoreIdInput"></a>

```go
func MetastoreIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SchemaIdInput`<sup>Optional</sup> <a name="SchemaIdInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.schemaIdInput"></a>

```go
func SchemaIdInput() *string
```

- *Type:* *string

---

##### `StorageLocationInput`<sup>Optional</sup> <a name="StorageLocationInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageLocationInput"></a>

```go
func StorageLocationInput() *string
```

- *Type:* *string

---

##### `StorageRootInput`<sup>Optional</sup> <a name="StorageRootInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageRootInput"></a>

```go
func StorageRootInput() *string
```

- *Type:* *string

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedAtInput"></a>

```go
func UpdatedAtInput() *f64
```

- *Type:* *f64

---

##### `UpdatedByInput`<sup>Optional</sup> <a name="UpdatedByInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedByInput"></a>

```go
func UpdatedByInput() *string
```

- *Type:* *string

---

##### `BrowseOnly`<sup>Required</sup> <a name="BrowseOnly" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.browseOnly"></a>

```go
func BrowseOnly() interface{}
```

- *Type:* interface{}

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `CatalogType`<sup>Required</sup> <a name="CatalogType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogType"></a>

```go
func CatalogType() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `EnablePredictiveOptimization`<sup>Required</sup> <a name="EnablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.enablePredictiveOptimization"></a>

```go
func EnablePredictiveOptimization() *string
```

- *Type:* *string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fullName"></a>

```go
func FullName() *string
```

- *Type:* *string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.metastoreId"></a>

```go
func MetastoreId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.schemaId"></a>

```go
func SchemaId() *string
```

- *Type:* *string

---

##### `StorageLocation`<sup>Required</sup> <a name="StorageLocation" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageLocation"></a>

```go
func StorageLocation() *string
```

- *Type:* *string

---

##### `StorageRoot`<sup>Required</sup> <a name="StorageRoot" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageRoot"></a>

```go
func StorageRoot() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *f64
```

- *Type:* *f64

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksSchemaSchemaInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a>

---



