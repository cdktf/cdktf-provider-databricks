# `databricks_sql_query`

Refer to the Terraform Registory for docs: [`databricks_sql_query`](https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query).

# `sqlQuery` Submodule <a name="`sqlQuery` Submodule" id="@cdktf/provider-databricks.sqlQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlQuery <a name="SqlQuery" id="@cdktf/provider-databricks.sqlQuery.SqlQuery"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query databricks_sql_query}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

new sqlQuery.SqlQuery(scope: Construct, id: string, config: SqlQueryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig">SqlQueryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig">SqlQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetParameter">resetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetRunAsRole">resetRunAsRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putParameter` <a name="putParameter" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.putParameter"></a>

```typescript
public putParameter(value: IResolvable | SqlQueryParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>[]

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.putSchedule"></a>

```typescript
public putSchedule(value: SqlQuerySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetParameter"></a>

```typescript
public resetParameter(): void
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetRunAsRole` <a name="resetRunAsRole" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetRunAsRole"></a>

```typescript
public resetRunAsRole(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isConstruct"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

sqlQuery.SqlQuery.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformElement"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

sqlQuery.SqlQuery.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformResource"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

sqlQuery.SqlQuery.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList">SqlQueryParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference">SqlQueryScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dataSourceIdInput">dataSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parameterInput">parameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.runAsRoleInput">runAsRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.runAsRole">runAsRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parameter"></a>

```typescript
public readonly parameter: SqlQueryParameterList;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList">SqlQueryParameterList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.schedule"></a>

```typescript
public readonly schedule: SqlQueryScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference">SqlQueryScheduleOutputReference</a>

---

##### `dataSourceIdInput`<sup>Optional</sup> <a name="dataSourceIdInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dataSourceIdInput"></a>

```typescript
public readonly dataSourceIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parameterInput"></a>

```typescript
public readonly parameterInput: IResolvable | SqlQueryParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>[]

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `runAsRoleInput`<sup>Optional</sup> <a name="runAsRoleInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.runAsRoleInput"></a>

```typescript
public readonly runAsRoleInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: SqlQuerySchedule;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `runAsRole`<sup>Required</sup> <a name="runAsRole" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.runAsRole"></a>

```typescript
public readonly runAsRole: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlQueryConfig <a name="SqlQueryConfig" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

const sqlQueryConfig: sqlQuery.SqlQueryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#data_source_id SqlQuery#data_source_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#name SqlQuery#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.query">query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#query SqlQuery#query}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#description SqlQuery#description}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#id SqlQuery#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>[]</code> | parameter block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#parent SqlQuery#parent}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.runAsRole">runAsRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#run_as_role SqlQuery#run_as_role}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#tags SqlQuery#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#data_source_id SqlQuery#data_source_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#name SqlQuery#name}.

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#query SqlQuery#query}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#description SqlQuery#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#id SqlQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.parameter"></a>

```typescript
public readonly parameter: IResolvable | SqlQueryParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#parameter SqlQuery#parameter}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#parent SqlQuery#parent}.

---

##### `runAsRole`<sup>Optional</sup> <a name="runAsRole" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.runAsRole"></a>

```typescript
public readonly runAsRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#run_as_role SqlQuery#run_as_role}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.schedule"></a>

```typescript
public readonly schedule: SqlQuerySchedule;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#schedule SqlQuery#schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#tags SqlQuery#tags}.

---

### SqlQueryParameter <a name="SqlQueryParameter" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

const sqlQueryParameter: sqlQuery.SqlQueryParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#name SqlQuery#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.date">date</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a></code> | date block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.dateRange">dateRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a></code> | date_range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetime">datetime</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a></code> | datetime block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimeRange">datetimeRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a></code> | datetime_range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimesec">datetimesec</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a></code> | datetimesec block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimesecRange">datetimesecRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a></code> | datetimesec_range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.enum">enum</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a></code> | enum block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.number">number</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a></code> | number block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.query">query</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.text">text</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a></code> | text block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#title SqlQuery#title}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#name SqlQuery#name}.

---

##### `date`<sup>Optional</sup> <a name="date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.date"></a>

```typescript
public readonly date: SqlQueryParameterDate;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a>

date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#date SqlQuery#date}

---

##### `dateRange`<sup>Optional</sup> <a name="dateRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.dateRange"></a>

```typescript
public readonly dateRange: SqlQueryParameterDateRange;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a>

date_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#date_range SqlQuery#date_range}

---

##### `datetime`<sup>Optional</sup> <a name="datetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetime"></a>

```typescript
public readonly datetime: SqlQueryParameterDatetime;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a>

datetime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#datetime SqlQuery#datetime}

---

##### `datetimeRange`<sup>Optional</sup> <a name="datetimeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimeRange"></a>

```typescript
public readonly datetimeRange: SqlQueryParameterDatetimeRange;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a>

datetime_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#datetime_range SqlQuery#datetime_range}

---

##### `datetimesec`<sup>Optional</sup> <a name="datetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimesec"></a>

```typescript
public readonly datetimesec: SqlQueryParameterDatetimesec;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a>

datetimesec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#datetimesec SqlQuery#datetimesec}

---

##### `datetimesecRange`<sup>Optional</sup> <a name="datetimesecRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimesecRange"></a>

```typescript
public readonly datetimesecRange: SqlQueryParameterDatetimesecRange;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a>

datetimesec_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#datetimesec_range SqlQuery#datetimesec_range}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.enum"></a>

```typescript
public readonly enum: SqlQueryParameterEnum;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a>

enum block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#enum SqlQuery#enum}

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.number"></a>

```typescript
public readonly number: SqlQueryParameterNumber;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a>

number block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#number SqlQuery#number}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.query"></a>

```typescript
public readonly query: SqlQueryParameterQuery;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#query SqlQuery#query}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.text"></a>

```typescript
public readonly text: SqlQueryParameterText;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#text SqlQuery#text}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#title SqlQuery#title}.

---

### SqlQueryParameterDate <a name="SqlQueryParameterDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

const sqlQueryParameterDate: sqlQuery.SqlQueryParameterDate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDateRange <a name="SqlQueryParameterDateRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

const sqlQueryParameterDateRange: sqlQuery.SqlQueryParameterDateRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.property.range">range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.property.range"></a>

```typescript
public readonly range: SqlQueryParameterDateRangeRange;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#range SqlQuery#range}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDateRangeRange <a name="SqlQueryParameterDateRangeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

const sqlQueryParameterDateRangeRange: sqlQuery.SqlQueryParameterDateRangeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.property.end">end</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#end SqlQuery#end}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.property.start">start</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#start SqlQuery#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#end SqlQuery#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#start SqlQuery#start}.

---

### SqlQueryParameterDatetime <a name="SqlQueryParameterDatetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

const sqlQueryParameterDatetime: sqlQuery.SqlQueryParameterDatetime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDatetimeRange <a name="SqlQueryParameterDatetimeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

const sqlQueryParameterDatetimeRange: sqlQuery.SqlQueryParameterDatetimeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.property.range">range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.property.range"></a>

```typescript
public readonly range: SqlQueryParameterDatetimeRangeRange;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#range SqlQuery#range}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDatetimeRangeRange <a name="SqlQueryParameterDatetimeRangeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

const sqlQueryParameterDatetimeRangeRange: sqlQuery.SqlQueryParameterDatetimeRangeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.property.end">end</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#end SqlQuery#end}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.property.start">start</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#start SqlQuery#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#end SqlQuery#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#start SqlQuery#start}.

---

### SqlQueryParameterDatetimesec <a name="SqlQueryParameterDatetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

const sqlQueryParameterDatetimesec: sqlQuery.SqlQueryParameterDatetimesec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDatetimesecRange <a name="SqlQueryParameterDatetimesecRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

const sqlQueryParameterDatetimesecRange: sqlQuery.SqlQueryParameterDatetimesecRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.property.range">range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.property.range"></a>

```typescript
public readonly range: SqlQueryParameterDatetimesecRangeRange;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#range SqlQuery#range}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDatetimesecRangeRange <a name="SqlQueryParameterDatetimesecRangeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

const sqlQueryParameterDatetimesecRangeRange: sqlQuery.SqlQueryParameterDatetimesecRangeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.property.end">end</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#end SqlQuery#end}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.property.start">start</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#start SqlQuery#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#end SqlQuery#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#start SqlQuery#start}.

---

### SqlQueryParameterEnum <a name="SqlQueryParameterEnum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

const sqlQueryParameterEnum: sqlQuery.SqlQueryParameterEnum = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.options">options</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#options SqlQuery#options}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.multiple">multiple</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a></code> | multiple block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#value SqlQuery#value}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#values SqlQuery#values}. |

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.options"></a>

```typescript
public readonly options: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#options SqlQuery#options}.

---

##### `multiple`<sup>Optional</sup> <a name="multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.multiple"></a>

```typescript
public readonly multiple: SqlQueryParameterEnumMultiple;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a>

multiple block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#multiple SqlQuery#multiple}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#value SqlQuery#value}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#values SqlQuery#values}.

---

### SqlQueryParameterEnumMultiple <a name="SqlQueryParameterEnumMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

const sqlQueryParameterEnumMultiple: sqlQuery.SqlQueryParameterEnumMultiple = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#prefix SqlQuery#prefix}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.separator">separator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#separator SqlQuery#separator}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.suffix">suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#suffix SqlQuery#suffix}. |

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#prefix SqlQuery#prefix}.

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.separator"></a>

```typescript
public readonly separator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#separator SqlQuery#separator}.

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#suffix SqlQuery#suffix}.

---

### SqlQueryParameterNumber <a name="SqlQueryParameterNumber" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

const sqlQueryParameterNumber: sqlQuery.SqlQueryParameterNumber = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterQuery <a name="SqlQueryParameterQuery" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

const sqlQueryParameterQuery: sqlQuery.SqlQueryParameterQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.queryId">queryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#query_id SqlQuery#query_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.multiple">multiple</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a></code> | multiple block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#value SqlQuery#value}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#values SqlQuery#values}. |

---

##### `queryId`<sup>Required</sup> <a name="queryId" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.queryId"></a>

```typescript
public readonly queryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#query_id SqlQuery#query_id}.

---

##### `multiple`<sup>Optional</sup> <a name="multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.multiple"></a>

```typescript
public readonly multiple: SqlQueryParameterQueryMultiple;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a>

multiple block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#multiple SqlQuery#multiple}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#value SqlQuery#value}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#values SqlQuery#values}.

---

### SqlQueryParameterQueryMultiple <a name="SqlQueryParameterQueryMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

const sqlQueryParameterQueryMultiple: sqlQuery.SqlQueryParameterQueryMultiple = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#prefix SqlQuery#prefix}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.separator">separator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#separator SqlQuery#separator}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.suffix">suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#suffix SqlQuery#suffix}. |

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#prefix SqlQuery#prefix}.

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.separator"></a>

```typescript
public readonly separator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#separator SqlQuery#separator}.

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#suffix SqlQuery#suffix}.

---

### SqlQueryParameterText <a name="SqlQueryParameterText" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

const sqlQueryParameterText: sqlQuery.SqlQueryParameterText = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQuerySchedule <a name="SqlQuerySchedule" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

const sqlQuerySchedule: sqlQuery.SqlQuerySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.continuous">continuous</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a></code> | continuous block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.daily">daily</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a></code> | daily block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.weekly">weekly</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a></code> | weekly block. |

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.continuous"></a>

```typescript
public readonly continuous: SqlQueryScheduleContinuous;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a>

continuous block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#continuous SqlQuery#continuous}

---

##### `daily`<sup>Optional</sup> <a name="daily" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.daily"></a>

```typescript
public readonly daily: SqlQueryScheduleDaily;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a>

daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#daily SqlQuery#daily}

---

##### `weekly`<sup>Optional</sup> <a name="weekly" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.weekly"></a>

```typescript
public readonly weekly: SqlQueryScheduleWeekly;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a>

weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#weekly SqlQuery#weekly}

---

### SqlQueryScheduleContinuous <a name="SqlQueryScheduleContinuous" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

const sqlQueryScheduleContinuous: sqlQuery.SqlQueryScheduleContinuous = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#interval_seconds SqlQuery#interval_seconds}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.property.untilDate">untilDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#until_date SqlQuery#until_date}. |

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#interval_seconds SqlQuery#interval_seconds}.

---

##### `untilDate`<sup>Optional</sup> <a name="untilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.property.untilDate"></a>

```typescript
public readonly untilDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#until_date SqlQuery#until_date}.

---

### SqlQueryScheduleDaily <a name="SqlQueryScheduleDaily" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

const sqlQueryScheduleDaily: sqlQuery.SqlQueryScheduleDaily = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.intervalDays">intervalDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#interval_days SqlQuery#interval_days}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.timeOfDay">timeOfDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#time_of_day SqlQuery#time_of_day}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.untilDate">untilDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#until_date SqlQuery#until_date}. |

---

##### `intervalDays`<sup>Required</sup> <a name="intervalDays" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.intervalDays"></a>

```typescript
public readonly intervalDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#interval_days SqlQuery#interval_days}.

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.timeOfDay"></a>

```typescript
public readonly timeOfDay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#time_of_day SqlQuery#time_of_day}.

---

##### `untilDate`<sup>Optional</sup> <a name="untilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.untilDate"></a>

```typescript
public readonly untilDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#until_date SqlQuery#until_date}.

---

### SqlQueryScheduleWeekly <a name="SqlQueryScheduleWeekly" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

const sqlQueryScheduleWeekly: sqlQuery.SqlQueryScheduleWeekly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#day_of_week SqlQuery#day_of_week}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.intervalWeeks">intervalWeeks</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#interval_weeks SqlQuery#interval_weeks}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.timeOfDay">timeOfDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#time_of_day SqlQuery#time_of_day}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.untilDate">untilDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#until_date SqlQuery#until_date}. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#day_of_week SqlQuery#day_of_week}.

---

##### `intervalWeeks`<sup>Required</sup> <a name="intervalWeeks" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.intervalWeeks"></a>

```typescript
public readonly intervalWeeks: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#interval_weeks SqlQuery#interval_weeks}.

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.timeOfDay"></a>

```typescript
public readonly timeOfDay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#time_of_day SqlQuery#time_of_day}.

---

##### `untilDate`<sup>Optional</sup> <a name="untilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.untilDate"></a>

```typescript
public readonly untilDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/sql_query#until_date SqlQuery#until_date}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlQueryParameterDateOutputReference <a name="SqlQueryParameterDateOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

new sqlQuery.SqlQueryParameterDateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlQueryParameterDate;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a>

---


### SqlQueryParameterDateRangeOutputReference <a name="SqlQueryParameterDateRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

new sqlQuery.SqlQueryParameterDateRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.putRange">putRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resetRange">resetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.putRange"></a>

```typescript
public putRange(value: SqlQueryParameterDateRangeRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a>

---

##### `resetRange` <a name="resetRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resetRange"></a>

```typescript
public resetRange(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference">SqlQueryParameterDateRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.rangeInput">rangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.range"></a>

```typescript
public readonly range: SqlQueryParameterDateRangeRangeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference">SqlQueryParameterDateRangeRangeOutputReference</a>

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.rangeInput"></a>

```typescript
public readonly rangeInput: SqlQueryParameterDateRangeRange;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlQueryParameterDateRange;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a>

---


### SqlQueryParameterDateRangeRangeOutputReference <a name="SqlQueryParameterDateRangeRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

new sqlQuery.SqlQueryParameterDateRangeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.endInput">endInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.startInput">startInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.endInput"></a>

```typescript
public readonly endInput: string;
```

- *Type:* string

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.startInput"></a>

```typescript
public readonly startInput: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlQueryParameterDateRangeRange;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a>

---


### SqlQueryParameterDatetimeOutputReference <a name="SqlQueryParameterDatetimeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

new sqlQuery.SqlQueryParameterDatetimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlQueryParameterDatetime;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a>

---


### SqlQueryParameterDatetimeRangeOutputReference <a name="SqlQueryParameterDatetimeRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

new sqlQuery.SqlQueryParameterDatetimeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.putRange">putRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resetRange">resetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.putRange"></a>

```typescript
public putRange(value: SqlQueryParameterDatetimeRangeRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a>

---

##### `resetRange` <a name="resetRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resetRange"></a>

```typescript
public resetRange(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference">SqlQueryParameterDatetimeRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.rangeInput">rangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.range"></a>

```typescript
public readonly range: SqlQueryParameterDatetimeRangeRangeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference">SqlQueryParameterDatetimeRangeRangeOutputReference</a>

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.rangeInput"></a>

```typescript
public readonly rangeInput: SqlQueryParameterDatetimeRangeRange;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlQueryParameterDatetimeRange;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a>

---


### SqlQueryParameterDatetimeRangeRangeOutputReference <a name="SqlQueryParameterDatetimeRangeRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

new sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.endInput">endInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.startInput">startInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.endInput"></a>

```typescript
public readonly endInput: string;
```

- *Type:* string

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.startInput"></a>

```typescript
public readonly startInput: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlQueryParameterDatetimeRangeRange;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a>

---


### SqlQueryParameterDatetimesecOutputReference <a name="SqlQueryParameterDatetimesecOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

new sqlQuery.SqlQueryParameterDatetimesecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlQueryParameterDatetimesec;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a>

---


### SqlQueryParameterDatetimesecRangeOutputReference <a name="SqlQueryParameterDatetimesecRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

new sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.putRange">putRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resetRange">resetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.putRange"></a>

```typescript
public putRange(value: SqlQueryParameterDatetimesecRangeRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a>

---

##### `resetRange` <a name="resetRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resetRange"></a>

```typescript
public resetRange(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference">SqlQueryParameterDatetimesecRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.rangeInput">rangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.range"></a>

```typescript
public readonly range: SqlQueryParameterDatetimesecRangeRangeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference">SqlQueryParameterDatetimesecRangeRangeOutputReference</a>

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.rangeInput"></a>

```typescript
public readonly rangeInput: SqlQueryParameterDatetimesecRangeRange;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlQueryParameterDatetimesecRange;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a>

---


### SqlQueryParameterDatetimesecRangeRangeOutputReference <a name="SqlQueryParameterDatetimesecRangeRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

new sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.endInput">endInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.startInput">startInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.endInput"></a>

```typescript
public readonly endInput: string;
```

- *Type:* string

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.startInput"></a>

```typescript
public readonly startInput: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlQueryParameterDatetimesecRangeRange;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a>

---


### SqlQueryParameterEnumMultipleOutputReference <a name="SqlQueryParameterEnumMultipleOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

new sqlQuery.SqlQueryParameterEnumMultipleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.separatorInput">separatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.suffixInput">suffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.separator">separator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `separatorInput`<sup>Optional</sup> <a name="separatorInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.separatorInput"></a>

```typescript
public readonly separatorInput: string;
```

- *Type:* string

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.suffixInput"></a>

```typescript
public readonly suffixInput: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.separator"></a>

```typescript
public readonly separator: string;
```

- *Type:* string

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlQueryParameterEnumMultiple;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a>

---


### SqlQueryParameterEnumOutputReference <a name="SqlQueryParameterEnumOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

new sqlQuery.SqlQueryParameterEnumOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.putMultiple">putMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetMultiple">resetMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMultiple` <a name="putMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.putMultiple"></a>

```typescript
public putMultiple(value: SqlQueryParameterEnumMultiple): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.putMultiple.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a>

---

##### `resetMultiple` <a name="resetMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetMultiple"></a>

```typescript
public resetMultiple(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.multiple">multiple</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference">SqlQueryParameterEnumMultipleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.multipleInput">multipleInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.optionsInput">optionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.options">options</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `multiple`<sup>Required</sup> <a name="multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.multiple"></a>

```typescript
public readonly multiple: SqlQueryParameterEnumMultipleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference">SqlQueryParameterEnumMultipleOutputReference</a>

---

##### `multipleInput`<sup>Optional</sup> <a name="multipleInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.multipleInput"></a>

```typescript
public readonly multipleInput: SqlQueryParameterEnumMultiple;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a>

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: string[];
```

- *Type:* string[]

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.options"></a>

```typescript
public readonly options: string[];
```

- *Type:* string[]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlQueryParameterEnum;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a>

---


### SqlQueryParameterList <a name="SqlQueryParameterList" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

new sqlQuery.SqlQueryParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.get"></a>

```typescript
public get(index: number): SqlQueryParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqlQueryParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>[]

---


### SqlQueryParameterNumberOutputReference <a name="SqlQueryParameterNumberOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

new sqlQuery.SqlQueryParameterNumberOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlQueryParameterNumber;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a>

---


### SqlQueryParameterOutputReference <a name="SqlQueryParameterOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

new sqlQuery.SqlQueryParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDate">putDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDateRange">putDateRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetime">putDatetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimeRange">putDatetimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesec">putDatetimesec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesecRange">putDatetimesecRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putEnum">putEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putNumber">putNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putText">putText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDate">resetDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDateRange">resetDateRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetime">resetDatetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimeRange">resetDatetimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimesec">resetDatetimesec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimesecRange">resetDatetimesecRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetEnum">resetEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetNumber">resetNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDate` <a name="putDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDate"></a>

```typescript
public putDate(value: SqlQueryParameterDate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a>

---

##### `putDateRange` <a name="putDateRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDateRange"></a>

```typescript
public putDateRange(value: SqlQueryParameterDateRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDateRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a>

---

##### `putDatetime` <a name="putDatetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetime"></a>

```typescript
public putDatetime(value: SqlQueryParameterDatetime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a>

---

##### `putDatetimeRange` <a name="putDatetimeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimeRange"></a>

```typescript
public putDatetimeRange(value: SqlQueryParameterDatetimeRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a>

---

##### `putDatetimesec` <a name="putDatetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesec"></a>

```typescript
public putDatetimesec(value: SqlQueryParameterDatetimesec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a>

---

##### `putDatetimesecRange` <a name="putDatetimesecRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesecRange"></a>

```typescript
public putDatetimesecRange(value: SqlQueryParameterDatetimesecRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesecRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a>

---

##### `putEnum` <a name="putEnum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putEnum"></a>

```typescript
public putEnum(value: SqlQueryParameterEnum): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putEnum.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a>

---

##### `putNumber` <a name="putNumber" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putNumber"></a>

```typescript
public putNumber(value: SqlQueryParameterNumber): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putNumber.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a>

---

##### `putQuery` <a name="putQuery" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putQuery"></a>

```typescript
public putQuery(value: SqlQueryParameterQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a>

---

##### `putText` <a name="putText" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putText"></a>

```typescript
public putText(value: SqlQueryParameterText): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a>

---

##### `resetDate` <a name="resetDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDate"></a>

```typescript
public resetDate(): void
```

##### `resetDateRange` <a name="resetDateRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDateRange"></a>

```typescript
public resetDateRange(): void
```

##### `resetDatetime` <a name="resetDatetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetime"></a>

```typescript
public resetDatetime(): void
```

##### `resetDatetimeRange` <a name="resetDatetimeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimeRange"></a>

```typescript
public resetDatetimeRange(): void
```

##### `resetDatetimesec` <a name="resetDatetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimesec"></a>

```typescript
public resetDatetimesec(): void
```

##### `resetDatetimesecRange` <a name="resetDatetimesecRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimesecRange"></a>

```typescript
public resetDatetimesecRange(): void
```

##### `resetEnum` <a name="resetEnum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetEnum"></a>

```typescript
public resetEnum(): void
```

##### `resetNumber` <a name="resetNumber" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetNumber"></a>

```typescript
public resetNumber(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```

##### `resetText` <a name="resetText" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetText"></a>

```typescript
public resetText(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.date">date</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference">SqlQueryParameterDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateRange">dateRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference">SqlQueryParameterDateRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetime">datetime</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference">SqlQueryParameterDatetimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeRange">datetimeRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference">SqlQueryParameterDatetimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesec">datetimesec</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference">SqlQueryParameterDatetimesecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecRange">datetimesecRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference">SqlQueryParameterDatetimesecRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.enum">enum</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference">SqlQueryParameterEnumOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.number">number</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference">SqlQueryParameterNumberOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.query">query</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference">SqlQueryParameterQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference">SqlQueryParameterTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateInput">dateInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateRangeInput">dateRangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeInput">datetimeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeRangeInput">datetimeRangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecInput">datetimesecInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecRangeInput">datetimesecRangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.enumInput">enumInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.numberInput">numberInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.queryInput">queryInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.textInput">textInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `date`<sup>Required</sup> <a name="date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.date"></a>

```typescript
public readonly date: SqlQueryParameterDateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference">SqlQueryParameterDateOutputReference</a>

---

##### `dateRange`<sup>Required</sup> <a name="dateRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateRange"></a>

```typescript
public readonly dateRange: SqlQueryParameterDateRangeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference">SqlQueryParameterDateRangeOutputReference</a>

---

##### `datetime`<sup>Required</sup> <a name="datetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetime"></a>

```typescript
public readonly datetime: SqlQueryParameterDatetimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference">SqlQueryParameterDatetimeOutputReference</a>

---

##### `datetimeRange`<sup>Required</sup> <a name="datetimeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeRange"></a>

```typescript
public readonly datetimeRange: SqlQueryParameterDatetimeRangeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference">SqlQueryParameterDatetimeRangeOutputReference</a>

---

##### `datetimesec`<sup>Required</sup> <a name="datetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesec"></a>

```typescript
public readonly datetimesec: SqlQueryParameterDatetimesecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference">SqlQueryParameterDatetimesecOutputReference</a>

---

##### `datetimesecRange`<sup>Required</sup> <a name="datetimesecRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecRange"></a>

```typescript
public readonly datetimesecRange: SqlQueryParameterDatetimesecRangeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference">SqlQueryParameterDatetimesecRangeOutputReference</a>

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.enum"></a>

```typescript
public readonly enum: SqlQueryParameterEnumOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference">SqlQueryParameterEnumOutputReference</a>

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.number"></a>

```typescript
public readonly number: SqlQueryParameterNumberOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference">SqlQueryParameterNumberOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.query"></a>

```typescript
public readonly query: SqlQueryParameterQueryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference">SqlQueryParameterQueryOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.text"></a>

```typescript
public readonly text: SqlQueryParameterTextOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference">SqlQueryParameterTextOutputReference</a>

---

##### `dateInput`<sup>Optional</sup> <a name="dateInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateInput"></a>

```typescript
public readonly dateInput: SqlQueryParameterDate;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a>

---

##### `dateRangeInput`<sup>Optional</sup> <a name="dateRangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateRangeInput"></a>

```typescript
public readonly dateRangeInput: SqlQueryParameterDateRange;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a>

---

##### `datetimeInput`<sup>Optional</sup> <a name="datetimeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeInput"></a>

```typescript
public readonly datetimeInput: SqlQueryParameterDatetime;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a>

---

##### `datetimeRangeInput`<sup>Optional</sup> <a name="datetimeRangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeRangeInput"></a>

```typescript
public readonly datetimeRangeInput: SqlQueryParameterDatetimeRange;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a>

---

##### `datetimesecInput`<sup>Optional</sup> <a name="datetimesecInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecInput"></a>

```typescript
public readonly datetimesecInput: SqlQueryParameterDatetimesec;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a>

---

##### `datetimesecRangeInput`<sup>Optional</sup> <a name="datetimesecRangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecRangeInput"></a>

```typescript
public readonly datetimesecRangeInput: SqlQueryParameterDatetimesecRange;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a>

---

##### `enumInput`<sup>Optional</sup> <a name="enumInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.enumInput"></a>

```typescript
public readonly enumInput: SqlQueryParameterEnum;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `numberInput`<sup>Optional</sup> <a name="numberInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.numberInput"></a>

```typescript
public readonly numberInput: SqlQueryParameterNumber;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: SqlQueryParameterQuery;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.textInput"></a>

```typescript
public readonly textInput: SqlQueryParameterText;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqlQueryParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>

---


### SqlQueryParameterQueryMultipleOutputReference <a name="SqlQueryParameterQueryMultipleOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

new sqlQuery.SqlQueryParameterQueryMultipleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.separatorInput">separatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.suffixInput">suffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.separator">separator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `separatorInput`<sup>Optional</sup> <a name="separatorInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.separatorInput"></a>

```typescript
public readonly separatorInput: string;
```

- *Type:* string

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.suffixInput"></a>

```typescript
public readonly suffixInput: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.separator"></a>

```typescript
public readonly separator: string;
```

- *Type:* string

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlQueryParameterQueryMultiple;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a>

---


### SqlQueryParameterQueryOutputReference <a name="SqlQueryParameterQueryOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

new sqlQuery.SqlQueryParameterQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.putMultiple">putMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetMultiple">resetMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMultiple` <a name="putMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.putMultiple"></a>

```typescript
public putMultiple(value: SqlQueryParameterQueryMultiple): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.putMultiple.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a>

---

##### `resetMultiple` <a name="resetMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetMultiple"></a>

```typescript
public resetMultiple(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.multiple">multiple</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference">SqlQueryParameterQueryMultipleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.multipleInput">multipleInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.queryIdInput">queryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.queryId">queryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `multiple`<sup>Required</sup> <a name="multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.multiple"></a>

```typescript
public readonly multiple: SqlQueryParameterQueryMultipleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference">SqlQueryParameterQueryMultipleOutputReference</a>

---

##### `multipleInput`<sup>Optional</sup> <a name="multipleInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.multipleInput"></a>

```typescript
public readonly multipleInput: SqlQueryParameterQueryMultiple;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a>

---

##### `queryIdInput`<sup>Optional</sup> <a name="queryIdInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.queryIdInput"></a>

```typescript
public readonly queryIdInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `queryId`<sup>Required</sup> <a name="queryId" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.queryId"></a>

```typescript
public readonly queryId: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlQueryParameterQuery;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a>

---


### SqlQueryParameterTextOutputReference <a name="SqlQueryParameterTextOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

new sqlQuery.SqlQueryParameterTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlQueryParameterText;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a>

---


### SqlQueryScheduleContinuousOutputReference <a name="SqlQueryScheduleContinuousOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

new sqlQuery.SqlQueryScheduleContinuousOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resetUntilDate">resetUntilDate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUntilDate` <a name="resetUntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resetUntilDate"></a>

```typescript
public resetUntilDate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.untilDateInput">untilDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.untilDate">untilDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.intervalSecondsInput"></a>

```typescript
public readonly intervalSecondsInput: number;
```

- *Type:* number

---

##### `untilDateInput`<sup>Optional</sup> <a name="untilDateInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.untilDateInput"></a>

```typescript
public readonly untilDateInput: string;
```

- *Type:* string

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `untilDate`<sup>Required</sup> <a name="untilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.untilDate"></a>

```typescript
public readonly untilDate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlQueryScheduleContinuous;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a>

---


### SqlQueryScheduleDailyOutputReference <a name="SqlQueryScheduleDailyOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

new sqlQuery.SqlQueryScheduleDailyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resetUntilDate">resetUntilDate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUntilDate` <a name="resetUntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resetUntilDate"></a>

```typescript
public resetUntilDate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.intervalDaysInput">intervalDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.timeOfDayInput">timeOfDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.untilDateInput">untilDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.intervalDays">intervalDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.timeOfDay">timeOfDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.untilDate">untilDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intervalDaysInput`<sup>Optional</sup> <a name="intervalDaysInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.intervalDaysInput"></a>

```typescript
public readonly intervalDaysInput: number;
```

- *Type:* number

---

##### `timeOfDayInput`<sup>Optional</sup> <a name="timeOfDayInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.timeOfDayInput"></a>

```typescript
public readonly timeOfDayInput: string;
```

- *Type:* string

---

##### `untilDateInput`<sup>Optional</sup> <a name="untilDateInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.untilDateInput"></a>

```typescript
public readonly untilDateInput: string;
```

- *Type:* string

---

##### `intervalDays`<sup>Required</sup> <a name="intervalDays" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.intervalDays"></a>

```typescript
public readonly intervalDays: number;
```

- *Type:* number

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.timeOfDay"></a>

```typescript
public readonly timeOfDay: string;
```

- *Type:* string

---

##### `untilDate`<sup>Required</sup> <a name="untilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.untilDate"></a>

```typescript
public readonly untilDate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlQueryScheduleDaily;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a>

---


### SqlQueryScheduleOutputReference <a name="SqlQueryScheduleOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

new sqlQuery.SqlQueryScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putContinuous">putContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putDaily">putDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putWeekly">putWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetContinuous">resetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetDaily">resetDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetWeekly">resetWeekly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContinuous` <a name="putContinuous" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putContinuous"></a>

```typescript
public putContinuous(value: SqlQueryScheduleContinuous): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putContinuous.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a>

---

##### `putDaily` <a name="putDaily" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putDaily"></a>

```typescript
public putDaily(value: SqlQueryScheduleDaily): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putDaily.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a>

---

##### `putWeekly` <a name="putWeekly" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putWeekly"></a>

```typescript
public putWeekly(value: SqlQueryScheduleWeekly): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putWeekly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a>

---

##### `resetContinuous` <a name="resetContinuous" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetContinuous"></a>

```typescript
public resetContinuous(): void
```

##### `resetDaily` <a name="resetDaily" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetDaily"></a>

```typescript
public resetDaily(): void
```

##### `resetWeekly` <a name="resetWeekly" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetWeekly"></a>

```typescript
public resetWeekly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.continuous">continuous</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference">SqlQueryScheduleContinuousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.daily">daily</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference">SqlQueryScheduleDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.weekly">weekly</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference">SqlQueryScheduleWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.continuousInput">continuousInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.dailyInput">dailyInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.weeklyInput">weeklyInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.continuous"></a>

```typescript
public readonly continuous: SqlQueryScheduleContinuousOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference">SqlQueryScheduleContinuousOutputReference</a>

---

##### `daily`<sup>Required</sup> <a name="daily" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.daily"></a>

```typescript
public readonly daily: SqlQueryScheduleDailyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference">SqlQueryScheduleDailyOutputReference</a>

---

##### `weekly`<sup>Required</sup> <a name="weekly" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.weekly"></a>

```typescript
public readonly weekly: SqlQueryScheduleWeeklyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference">SqlQueryScheduleWeeklyOutputReference</a>

---

##### `continuousInput`<sup>Optional</sup> <a name="continuousInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.continuousInput"></a>

```typescript
public readonly continuousInput: SqlQueryScheduleContinuous;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a>

---

##### `dailyInput`<sup>Optional</sup> <a name="dailyInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.dailyInput"></a>

```typescript
public readonly dailyInput: SqlQueryScheduleDaily;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a>

---

##### `weeklyInput`<sup>Optional</sup> <a name="weeklyInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.weeklyInput"></a>

```typescript
public readonly weeklyInput: SqlQueryScheduleWeekly;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlQuerySchedule;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a>

---


### SqlQueryScheduleWeeklyOutputReference <a name="SqlQueryScheduleWeeklyOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer"></a>

```typescript
import { sqlQuery } from '@cdktf/provider-databricks'

new sqlQuery.SqlQueryScheduleWeeklyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resetUntilDate">resetUntilDate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUntilDate` <a name="resetUntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resetUntilDate"></a>

```typescript
public resetUntilDate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.intervalWeeksInput">intervalWeeksInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.timeOfDayInput">timeOfDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.untilDateInput">untilDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.intervalWeeks">intervalWeeks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.timeOfDay">timeOfDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.untilDate">untilDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `intervalWeeksInput`<sup>Optional</sup> <a name="intervalWeeksInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.intervalWeeksInput"></a>

```typescript
public readonly intervalWeeksInput: number;
```

- *Type:* number

---

##### `timeOfDayInput`<sup>Optional</sup> <a name="timeOfDayInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.timeOfDayInput"></a>

```typescript
public readonly timeOfDayInput: string;
```

- *Type:* string

---

##### `untilDateInput`<sup>Optional</sup> <a name="untilDateInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.untilDateInput"></a>

```typescript
public readonly untilDateInput: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `intervalWeeks`<sup>Required</sup> <a name="intervalWeeks" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.intervalWeeks"></a>

```typescript
public readonly intervalWeeks: number;
```

- *Type:* number

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.timeOfDay"></a>

```typescript
public readonly timeOfDay: string;
```

- *Type:* string

---

##### `untilDate`<sup>Required</sup> <a name="untilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.untilDate"></a>

```typescript
public readonly untilDate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlQueryScheduleWeekly;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a>

---



